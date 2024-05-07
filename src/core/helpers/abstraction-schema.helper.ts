import { TokenHelper } from "@quiz/core/helpers/token.helper";
import { IAbstractionSchema } from "../models";

export const withCreatedByAndUpdatedBy = (
  abstractionSchema: IAbstractionSchema,
  token: string
) => {
  withUpdatedBy(abstractionSchema, token);
  withCreatedBy(abstractionSchema, token);
};

export const withCreatedBy = (
  abstractionSchema: IAbstractionSchema,
  token: string
) => {
  abstractionSchema.createdBy = TokenHelper.getUserIdFromToken(token);
};

export const withUpdatedBy = (
  abstractionSchema: IAbstractionSchema,
  token: string
) => {
  abstractionSchema.updatedBy = TokenHelper.getUserIdFromToken(token);
};
