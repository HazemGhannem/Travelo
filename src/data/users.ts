import { UserRole } from "../models/enums/role.enum";

const users = [
  {
    name: "ghannem",
    email: "ghannem@gmail.com",
    password: "123456",
    role: UserRole.ADMIN,
    createdAt: new Date("2025-06-16T00:00:00Z"),
  },
  {
    name: "hazem",
    email: "hazem@gmail.com",
    password: "123456",
    role: UserRole.USER,
    createdAt: new Date("2025-06-15T00:00:00Z"),
  },
];

export default users;
