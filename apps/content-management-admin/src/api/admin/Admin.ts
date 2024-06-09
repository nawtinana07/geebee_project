import { User } from "../user/User";

export type Admin = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
