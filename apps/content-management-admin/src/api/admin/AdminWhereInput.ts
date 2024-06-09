import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
