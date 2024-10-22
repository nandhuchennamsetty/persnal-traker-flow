const express = require("express");
const {
  addTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getSummary,
} = require("../controllers/transactionController");

const router = express.Router();

router.post("/transactions", addTransaction);
router.get("/transactions", getAllTransactions);
router.get("/transactions/:id", getTransactionById);
router.put("/transactions/:id", updateTransaction);
router.delete("/transactions/:id", deleteTransaction);
router.get("/summary", getSummary);

module.exports = router;
