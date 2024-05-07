import { BodyResponse } from "../models";

export const success = (data: any = {}, message: string = "Success") => {
  const response: BodyResponse = {
    data,
    message,
  };

  return response;
};
