import { IUser } from "@quiz/modules/user/user.model";
import mongoose, { Schema } from "mongoose";

export interface IRefreshToken extends mongoose.Document {
  user: IUser;
  token: String;
  expiry: Date;
  replacedByToken: String;
}

const RefreshTokenSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    token: String,
    expiry: Date,
    replacedByToken: String,
  },
  {
    timestamps: true,
  }
);

const RefreshToken = mongoose.model<IRefreshToken>("RefreshToken", RefreshTokenSchema);

export default RefreshToken;
