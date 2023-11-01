const express = require("express");
const connect = require("./schemas");
const cartsRouter = require("./routes/good");
const goodsRouter = require("./routes/carts");
const app = express();
const { default: mongoose } = require("mongoose");
const port = 3000;
app.use(express.json());

mongoose.set("strictQuery", false);
connect();

app.get("/", (req, res) => {
  res.send(req.query);
});

app.use("/api", [goodsRouter, cartsRouter]);

app.listen(port, () => {
  console.log("listening on port " + port);
});
