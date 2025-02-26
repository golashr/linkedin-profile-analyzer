export interface CommentResponse {
    data: Comment[];
    message: string;
    total: number;
    pagination_token: string;
    start: number;
}

export interface Comment {
    annotation: string | null;
    commenter: {
        headline: string;
        linkedin_url: string;
        name: string;
        urn: string;
    };
    created_at: number;
    created_datetime: string;
    permalink: string;
    pinned: boolean;
    replies: Reply[];
}

interface Reply {
    annotation: string | null;
    commenter: {
        headline: string;
        linkedin_url: string;
        name: string;
        urn: string;
    };
    created_at: number;
    created_datetime: string;
    permalink: string;
    pinned: boolean;
} 