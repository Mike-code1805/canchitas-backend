import { Schema } from "mongoose";
import { Hat } from "../types/AdminCanchaModel";

export const hatSchema = new Schema<Hat>({
  address: {
    type: String,
  },
  advancement: {
    type: String,
  },
  cintillo: {
    type: String,
  },
  color_hat: {
    type: String,
  },
  color_tape: {
    type: String,
  },
  date: {
    type: String,
  },
  measure: {
    type: String,
  },
  name: {
    type: String,
  },
  observations: {
    type: String,
  },
  price: {
    type: String,
  },
  size: {
    type: String,
  },
  state: {
    type: String,
  },
  state_payment: {
    type: String,
  },
  tafalete: {
    type: String,
  },
  pendiente: {
    type: Boolean,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "an user is required to create a project"],
  },
});
