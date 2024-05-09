import mongoose from "mongoose";
import {
  abstractionSchema,
  IAbstractionSchema,
} from "./abstraction-schema.model";

export interface IAbstractionSchemaWithDeleteLogic extends IAbstractionSchema {
  isDeleted: boolean;
}

const abstractionSchemaWithDeleteLogic = new mongoose.Schema({
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});
abstractionSchemaWithDeleteLogic.add(abstractionSchema);
export default abstractionSchemaWithDeleteLogic;
