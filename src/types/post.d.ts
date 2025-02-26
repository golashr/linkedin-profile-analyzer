export interface PostResponse {
    data: Post[];
    message: string;
    paging?: {
        count: number;
        pagination_token: string;
        start: number;
    };
}

export interface Post {
    article_subtitle?: string;
    article_title?: string;
    images: string[];
    num_appreciations: number;
    num_comments: number;
    num_empathy: number;
    num_interests: number;
    num_likes: number;
    num_reposts: number;
    num_praises?: number;
    post_url: string;
    posted?: string;
    poster?: {
        first: string;
        headline: string;
    };
    poster_linkedin_url?: string;
    reshared: boolean;
    text: string;
    time: string;
    urn: string;
    video?: Video;
    document?: Document;
}

interface Video {
    duration: number;
    stream_url: string;
}

interface Document {
    page_count: number;
    title: string;
    url: string;
} 