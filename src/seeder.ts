import connectDB from "./config/db";
import  users  from "./data/users";
import UserModel from "./models/user.model";
connectDB();

const destroyUserData = async () => {
  try {
    await UserModel.deleteMany();
    console.log("Users data destroyed");
    process.exit();
  } catch (error) {
    console.error("Error destroying data:", error);
    process.exit(1);
  }
};

const addUsers = async () => {
  try {
    await UserModel.insertMany(users);
    console.log("Users added");
    process.exit();
  } catch (error) {
    console.error("Error adding users:", error);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await addUsers();
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

switch (process.argv[2]) {
  case "-du":
    destroyUserData();
    break;
  case "-u":
    addUsers();
    break;
  default:
    importData();
    break;
}
