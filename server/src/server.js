const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectToMongoDB } = require("./config/db");
const ranking = require("./routes/ranking");
const user = require("./routes/user");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectToMongoDB();

app.use("/api", ranking);
app.use("/api", user);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
