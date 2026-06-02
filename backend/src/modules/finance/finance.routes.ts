import { Router } from "express";
import transactionsRoutes from "./transactions/transactions.routes";
const router = Router();

router.use("/transactions", transactionsRoutes);

export default router;
