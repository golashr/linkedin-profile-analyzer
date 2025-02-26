import type { Config } from "../types/config.js";
import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = {
    rapidApiKey: 'RAPID_API_KEY',
    baseUrl: 'BASE_URL',
    rapidApiHost: 'RAPID_API_HOST'
} as const;

class ConfigImpl implements Config {
    private config: Config;

    constructor() {
        const missingVars = Object.values(requiredEnvVars)
            .filter(envVar => !process.env[envVar]);

        if (missingVars.length > 0) {
            throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
        }

        const configArray =  Object.entries(requiredEnvVars)
        .map(([key, envVar]) => [key, process.env[envVar]])
        
        this.config = Object.fromEntries(configArray) as Config;
    }

    get rapidApiKey() { return this.config.rapidApiKey; }
    get baseUrl() { return this.config.baseUrl; }
    get rapidApiHost() { return this.config.rapidApiHost; }
}

export const config = new ConfigImpl(); 