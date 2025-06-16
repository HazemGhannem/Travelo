import mongoose, { Document, Schema } from "mongoose";
import { UserRole } from "./enums/role.enum";
import { IUser } from "../interfaces/user.interface";
const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(UserRole), default: UserRole.USER },
  createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
