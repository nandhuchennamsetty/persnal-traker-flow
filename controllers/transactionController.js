const Transaction = require("../models/transactionModel");

// Add new transaction

exports.addTransaction = async (req, res) => {
  try {
    // console.log("Request Body:", req.body); // Log the request data
    const transaction = new Transaction(req.body);
    await transaction.save();
    // console.log("Saved Transaction:", transaction); // Log the saved transaction
    res.status(201).json(transaction);
  } catch (err) {
    // console.error("Error:", err.message);
    res.status(400).json({ error: err.message });
  }
};


// Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate("category");
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get transation by perticular id
exports.getTransactionById = async (req, res) => {
  try {
    // Fetch the transaction by ID and populate the category
    const transaction = await Transaction.findById(req.params.id).populate(
      "category"
    );

    if (!transaction) {
      // Send a 404 response if not found
      return res.status(404).json({ error: "Transaction not found" });
    }
    return res.status(200).json(transaction);
  } catch (err) {
    // Send a 500 response in case of an error
    return res.status(500).json({ error: err.message });
  }
};

// Update transaction by ID
exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!transaction)
      return res.status(404).json({ error: "Transaction not found" });
    res.status(200).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete transaction by ID
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction)
      return res.status(404).json({ error: "Transaction not found" });
    res.status(200).json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get summary
exports.getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    const summary = {
      totalIncome: transactions
        .filter((t) => t.type === "income")
        .reduce((acc, curr) => acc + curr.amount, 0),
      totalExpense: transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, curr) => acc + curr.amount, 0),
    };
    summary.balance = summary.totalIncome - summary.totalExpense;
    res.status(200).json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
