import { UserRole } from "../models/enums/role.enum";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date;
}
