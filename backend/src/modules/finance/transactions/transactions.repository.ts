import { TransactionModel } from "./transactions.model";
import { ITransaction, CreateTransactionDTO, UpdateTransactionDTO } from "./transactions.types";

export const createTransactionDb = async (data: CreateTransactionDTO) => {
  return await TransactionModel.create(data);
};

export const getTransactionsDb = async (query: Partial<ITransaction> = {}) => {
  return await TransactionModel.find(query).populate("categoryId");
};

export const getTransactionByIdDb = async (id: string) => {
  return await TransactionModel.findById(id).populate("categoryId");
};

export const updateTransactionDb = async (id: string, data: UpdateTransactionDTO) => {
  return await TransactionModel.findByIdAndUpdate(id, data, { new: true }).populate("categoryId");
};

export const deleteTransactionDb = async (id: string) => {
  return await TransactionModel.findByIdAndDelete(id);
};
