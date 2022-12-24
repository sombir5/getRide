const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connect = async () => {
  mongoose
    .connect(process.env.MONGOURL)
    .then((res) => console.log("Database connected !!!"))
    .catch((error) => console.log(error.nessage));
};

module.exports = connect;