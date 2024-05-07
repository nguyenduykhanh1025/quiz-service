import { IUser, USER_COLLECTION_NAME } from "@quiz/modules/user/user.model";
import mongoose, { Schema } from "mongoose";

export interface IRefreshToken extends mongoose.Document {
  user: IUser;
  token: String;
  expiry: Date;
  replacedByToken: String;
}

export const REFRESH_TOKEN_COLLECTION_NAME = "RefreshToken";

const RefreshTokenSchema = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: USER_COLLECTION_NAME },
    token: String,
    expiry: Date,
    replacedByToken: String,
  },
  {
    timestamps: true,
  }
);

const RefreshToken = mongoose.model<IRefreshToken>(
  REFRESH_TOKEN_COLLECTION_NAME,
  RefreshTokenSchema
);

export default RefreshToken;
