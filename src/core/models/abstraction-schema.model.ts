import mongoose, { SchemaDefinitionProperty } from "mongoose";

export interface IAbstractionSchema extends mongoose.Document {
  createdBy: string;
  updatedBy: string;
}

// FIXME: try to add required: true
export const abstractionSchema = new mongoose.Schema({
  createdBy: {
    type: String,
  },
  updatedBy: {
    type: String,
  },
})