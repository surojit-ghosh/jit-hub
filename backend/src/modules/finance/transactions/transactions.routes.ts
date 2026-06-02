import { Router } from "express";
import { createTransaction, getTransactions, getTransactionById, updateTransaction, deleteTransaction } from "./transactions.controller";

const router = Router();

router.route("/").post(createTransaction).get(getTransactions);
router.route("/:id").get(getTransactionById).put(updateTransaction).delete(deleteTransaction);

export default router;
