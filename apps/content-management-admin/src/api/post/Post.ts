import { Category } from "../category/Category";

export type Post = {
  author: string | null;
  category?: Category | null;
  content: string | null;
  createdAt: Date;
  id: string;
  isApproved: boolean | null;
  title: string | null;
  updatedAt: Date;
};
