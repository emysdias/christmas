const { ObjectId } = require('mongodb');
const { getCollection } = require("../config/db");

const addUser = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Nome é obrigatório" });
  }

  try {
    const collection = getCollection("users");
    const existingUser = await collection.findOne({ name });

    if (existingUser) {
      return res.status(200).json({
        message:
          "Usuário já jogou nosso jogo! Mas, claro, pode jogar novamente!",
      });
    }

    await collection.insertOne({ name, date: new Date() });

    return res.status(201).json({
      message: "Usuário adicionado com sucesso!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao adicionar usuário" });
  }
};

const findUser = async (req, res) => {
  const { id } = req.params;

  try {
    const collection = getCollection('users');

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const user = await collection.findOne({ _id: new ObjectId(id) });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao buscar usuário" });
  }
};

module.exports = { addUser, findUser };
