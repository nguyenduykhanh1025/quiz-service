import { ValidationError } from "class-validator";

export function findConstraints(error: ValidationError) {
  if (!error.children) {
    return {};
  }

  if (error.constraints) {
    return error.constraints;
  }

  return findConstraints(error.children[0]);
}
