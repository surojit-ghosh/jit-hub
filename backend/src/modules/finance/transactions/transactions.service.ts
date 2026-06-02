import { createTransactionDb, getTransactionsDb, getTransactionByIdDb, updateTransactionDb, deleteTransactionDb } from "./transactions.repository";
import { CreateTransactionDTO, UpdateTransactionDTO } from "./transactions.types";

export const saveTransaction = async (data: CreateTransactionDTO) => {
  return await createTransactionDb(data);
};

export const fetchTransactions = async (query: any) => {
  return await getTransactionsDb(query);
};

export const fetchTransactionById = async (id: string) => {
  return await getTransactionByIdDb(id);
};

export const modifyTransaction = async (id: string, data: UpdateTransactionDTO) => {
  return await updateTransactionDb(id, data);
};

export const removeTransaction = async (id: string) => {
  return await deleteTransactionDb(id);
};
