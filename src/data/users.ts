import { UserRole } from "../models/enums/role.enum";
//dummy data for testing 
const users = [
  {
    name: "Jhone",
    email: "jhone@gmail.com",
    password: "123456",
    role: UserRole.ADMIN,
    createdAt: new Date("2025-06-16T00:00:00Z"),
  },
  {
    name: "Doe",
    email: "doe@gmail.com",
    password: "123456",
    role: UserRole.USER,
    createdAt: new Date("2025-06-15T00:00:00Z"),
  },
];

export default users;
