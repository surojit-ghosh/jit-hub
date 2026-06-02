import { Schema, model } from "mongoose";
import { ITransaction } from "./transactions.types";

const transactionSchema = new Schema<ITransaction>(
  {
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
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

export const TransactionModel = model<ITransaction>("Transaction", transactionSchema);
