const express = require("express");
const dotenv = require("dotenv");
const { connectToMongoDB } = require("./config/db");
const ranking = require("./routes/ranking");

dotenv.config();

const app = express();

app.use(express.json());

connectToMongoDB();

app.use("/api", ranking);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
