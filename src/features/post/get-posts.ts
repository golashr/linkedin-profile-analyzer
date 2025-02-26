import { api } from "../../lib/api.js";
import type { PostResponse } from "../../types/post.js";
import type { CommentResponse } from "../../types/comment.js";
import dotenv from "dotenv";

dotenv.config();

export const getAllPosts = async (name: string): Promise<PostResponse> => {
    const params = {
        linkedin_url: `https://www.linkedin.com/in/${name}`,
        type: "posts"
    };
      
    const posts = await api<PostResponse>("get-profile-posts", { params });
    console.debug(`Successfully fetched ${posts.data.length} posts`);
    return posts;
};

export const getPostComments = async (urn: string): Promise<CommentResponse> => {
    const params = {
        urn,
        sort_by: "Most relevant"
    };
    const comments = await api<CommentResponse>("get-post-comments", { params });
    console.debug(`Successfully fetched ${comments.total?? 0} comments for post ${urn}`);
    return comments;
}; 