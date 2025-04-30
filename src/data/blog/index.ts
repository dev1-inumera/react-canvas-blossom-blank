
import { BlogPost } from './types';
import { blogPosts2025 } from './blogPosts2025';
import { blogPosts2024 } from './blogPosts2024';
import { blogPosts2023 } from './blogPosts2023';

// Combine all blog posts from different years
export const blogPosts: BlogPost[] = [
  ...blogPosts2025,
  ...blogPosts2024,
  ...blogPosts2023
];

export type { BlogPost };
