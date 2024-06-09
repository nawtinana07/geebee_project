import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminCreateInput = {
  user?: UserWhereUniqueInput | null;
};
