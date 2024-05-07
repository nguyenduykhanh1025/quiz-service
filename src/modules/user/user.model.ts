import { Role } from "@quiz/core/enums";
import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  email: string;
  fullName: string;
  password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

export const USER_COLLECTION_NAME = "User";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: Role,
      default: Role.user,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>(USER_COLLECTION_NAME, UserSchema);

export default User;
