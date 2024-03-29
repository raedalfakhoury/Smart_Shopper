const express = require("express");
const cors = require("cors");
const db = require("../backend/models/db");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const userRouter = require("./routes/user");
const roleRouter = require("./routes/role");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");
const categoryRouter = require("./routes/category");
const adminRouter = require("./routes/admin");
const cartRouter = require("./routes/cart");
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("", roleRouter);
app.use("/order", orderRouter);
app.use("", categoryRouter);
app.use("", adminRouter);
app.use("/cart", cartRouter);
app.use("/products", productRouter);
// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
