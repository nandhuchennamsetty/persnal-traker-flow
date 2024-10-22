const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

dotenv.config();
connectDB();



const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', transactionRoutes);
app.use('/api', categoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
