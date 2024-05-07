import mongoose, { SchemaDefinitionProperty } from "mongoose";

export interface IAbstractionSchema extends mongoose.Document {
  createdBy: string;
  updatedBy: string;
}

export const abstractionSchema = new mongoose.Schema({
  createdBy: {
    type: String,
    required: true
  },
  updatedBy: {
    type: String,
    required: true
  },
})