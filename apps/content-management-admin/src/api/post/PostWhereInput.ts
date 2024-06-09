import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PostWhereInput = {
  author?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  isApproved?: BooleanNullableFilter;
  title?: StringNullableFilter;
};
