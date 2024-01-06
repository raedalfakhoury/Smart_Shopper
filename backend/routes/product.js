const express = require("express");
const productRouter = express.Router();
const { addProduct, getAllProduct,deleteProductById,updateProductById } = require("../controllers/product");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
productRouter.post(
  "/createProduct",
  authentication,
  authorization("add_products"),
  addProduct
);
productRouter.delete(
  "/:id/delete",
  authentication,
  authorization("delete_product"),
  deleteProductById
);
productRouter.put(
  "/:id/update",
  authentication,
  authorization("add_products"),
  updateProductById
);
productRouter.post("/", authentication, getAllProduct);
module.exports = productRouter;