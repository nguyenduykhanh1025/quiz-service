import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { RequestHandler } from "express";
import { HttpException } from "../exceptions";
import { findConstraints } from "../helpers";

export function validationRequest(
  type: any,
  skipMissingProperties = false
): RequestHandler {
  return (req, _, next) => {
    validate(plainToInstance(type, req.body), { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors
            .map((error: ValidationError) => {
              return Object.values(findConstraints(error));
            })
            .join(", ");

          console.log("message", message);

          next(new HttpException(400, message));
        } else {
          next();
        }
      }
    );
  };
}
