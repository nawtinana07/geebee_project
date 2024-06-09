import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type PostUpdateInput = {
  author?: string | null;
  category?: CategoryWhereUniqueInput | null;
  content?: string | null;
  isApproved?: boolean | null;
  title?: string | null;
};
