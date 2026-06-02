import { Types } from "mongoose";

export interface ITransaction {
  amount: number;
  type: "income" | "expense";
  categoryId: Types.ObjectId | string;
  date: Date;
  description?: string;
  userId?: string;
}

export interface CreateTransactionDTO {
  amount: number;
  type: "income" | "expense";
  categoryId: string;
  date: Date;
  description?: string;
  userId?: string;
}

export interface UpdateTransactionDTO extends Partial<CreateTransactionDTO> {}
