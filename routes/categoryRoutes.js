const express = require("express");
const {
  addCategory,
  getAllCategories,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/categories", addCategory);
router.get("/categories", getAllCategories);

module.exports = router;
