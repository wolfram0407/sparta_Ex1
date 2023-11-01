const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb+srv://shudder48:VmHgmVuxiOwZjnLy@cluster0.4eb3gaz.mongodb.net/spa_mall")
    .then(() => console.log("MongoDB Cennected"))
    .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
