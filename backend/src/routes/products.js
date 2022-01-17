const { Router } = require("express");
const router = Router();
//controllers
const {
  readProduct,
  createProduct,
  deleteProductById,
  updateProductById,
  readProductById
} = require("../controllers/product.controllers");

router.route("/").get(readProduct).post(createProduct);

router.route("/:id").get(readProductById).put(updateProductById).delete(deleteProductById);

module.exports = router;
