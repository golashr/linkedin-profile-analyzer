import { config } from "../config/config.js";

// Track requests and limits
const requestHistory: number[] = [];
const WINDOW_SIZE = 60 * 1000; // 1 minute window

async function waitForRateLimit(
  remaining: number,
  resetTime: number,
): Promise<void> {
  // Check absolute limit
  if (remaining === 0) {
    const currentTime = Math.floor(Date.now() / 1000);
    const waitTime = resetTime - currentTime;

    if (waitTime > 0) {
      console.log(`Rate limit reached! Waiting ${waitTime} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, waitTime * 1000));
    }
    return;
  }

  // Clean up old requests from history
  const now = Date.now();
  while (requestHistory.length > 0 && requestHistory[0] < now - WINDOW_SIZE) {
    requestHistory.shift();
  }

  // Record this request
  requestHistory.push(now);
}

export const api = async <T>(
  requestUrl: string,
  options?: Omit<RequestInit, "body"> & {
    body?: object;
    params?: Record<string, string | number | undefined>;
  },
): Promise<T> => {
  const { body, params, ...rest } = options ?? {};
  let url = `${config.baseUrl}/${requestUrl}`;

  if (params && Object.keys(params).length) {
    const parsedParams = Object.entries(params).reduce(
      (accumulator, [key, value]) => {
        if (value) {
          accumulator[key] = value.toString();
        }
        return accumulator;
      },
      {} as Record<string, string>,
    );
    url = `${url}?${new URLSearchParams(parsedParams).toString()}`;
  }

  try {
    await waitForRateLimit(Infinity, 0); // Initial call with no limits

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": config.rapidApiKey,
      "X-RapidAPI-Host": config.rapidApiHost
    };

    const response = await fetch(url, {
      headers,
      ...(body && { body: JSON.stringify(body) }),
      ...rest,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return response.json() as Promise<T>;
  } catch (error) {
    // If we get a rate limit error, increase the wait time for next requests
    if (error instanceof Error && error.message.includes("rate limit")) {
      console.log(
        "Rate limit error detected. Increasing wait time for next requests.",
      );
    }
    throw error;
  }
};
