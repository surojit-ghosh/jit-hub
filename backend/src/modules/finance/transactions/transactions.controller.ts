import { Request, Response } from "express";
import { saveTransaction, fetchTransactions, fetchTransactionById, modifyTransaction, removeTransaction } from "./transactions.service";

export const createTransaction = async (request: Request, response: Response) => {
  try {
    const data = await saveTransaction(request.body);
    response.status(201).json({ success: true, data });
  } catch (error: any) {
    response.status(400).json({ success: false, error: error.message });
  }
};

export const getTransactions = async (request: Request, response: Response) => {
  try {
    const data = await fetchTransactions(request.query);
    response.status(200).json({ success: true, data });
  } catch (error: any) {
    response.status(400).json({ success: false, error: error.message });
  }
};

export const getTransactionById = async (request: Request, response: Response) => {
  try {
    const data = await fetchTransactionById(request.params.id);
    if (!data) {
      return response.status(404).json({ success: false, error: "Not found" });
    }
    response.status(200).json({ success: true, data });
  } catch (error: any) {
    response.status(400).json({ success: false, error: error.message });
  }
};

export const updateTransaction = async (request: Request, response: Response) => {
  try {
    const data = await modifyTransaction(request.params.id, request.body);
    if (!data) {
      return response.status(404).json({ success: false, error: "Not found" });
    }
    response.status(200).json({ success: true, data });
  } catch (error: any) {
    response.status(400).json({ success: false, error: error.message });
  }
};

export const deleteTransaction = async (request: Request, response: Response) => {
  try {
    const data = await removeTransaction(request.params.id);
    if (!data) {
      return response.status(404).json({ success: false, error: "Not found" });
    }
    response.status(200).json({ success: true, data });
  } catch (error: any) {
    response.status(400).json({ success: false, error: error.message });
  }
};
