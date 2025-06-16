import bcrypt from "bcryptjs";
import { UserRole } from "../models/enums/role.enum";

export const getUsers = async () => {
  return [
    {
      name: "Jhone",
      email: "jhone@gmail.com",
      password: await bcrypt.hash("123456", 10),
      role: UserRole.ADMIN,
      createdAt: new Date("2025-06-16T00:00:00Z"),
    },
    {
      name: "Doe",
      email: "doe@gmail.com",
      password: await bcrypt.hash("123456", 10),
      role: UserRole.USER,
      createdAt: new Date("2025-06-15T00:00:00Z"),
    },
  ];
};
