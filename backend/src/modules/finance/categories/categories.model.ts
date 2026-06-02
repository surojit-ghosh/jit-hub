import { Schema, model } from "mongoose";
import { ICategory } from "./categories.types";

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    icon: {
      type: String,
    },
    color: {
      type: String,
    },
    userId: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const CategoryModel = model<ICategory>("Category", categorySchema);
