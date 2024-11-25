const { getCollection } = require("../config/db");

const addPlayerTime = async (req, res) => {
  const { name, time } = req.body;

  if (!name || !time) {
    return res.status(400).json({ message: "Nome e tempo são obrigatórios" });
  }

  try {
    const collection = getCollection("ranking");
    const rankingCount = await collection.countDocuments();

    if (rankingCount >= 10) {
      return res.status(400).json({
        message:
          "O ranking já tem 10 jogadores. Infelizmente, você não entrou desta vez, mas continue tentando!",
      });
    }

    const existingPlayer = await collection.findOne({ name });

    if (!existingPlayer) {
      await collection.insertOne({ name, time, date: new Date() });
      return res
        .status(201)
        .json({ message: "Você foi adicionado ao ranking, parabéns!!" });
    }

    if (existingPlayer.time === time) {
      return res
        .status(200)
        .json({
          message: "Você continua com o mesmo tempo. Continue tentando!",
        });
    }

    if (time < existingPlayer.time) {
      await collection.updateOne(
        { name },
        { $set: { time, date: new Date() } }
      );
      return res
        .status(200)
        .json({ message: "Você atualizou seu tempo. Continue jogando!" });
    }

    return res.status(200).json({
      message:
        "Seu tempo não foi atualizado, pois é menor do que o recorde atual.",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao salvar tempo no ranking" });
  }
};

const getRanking = async (req, res) => {
  try {
    const collection = getCollection("ranking");

    const ranking = await collection.find({}).sort({ time: 1 }).toArray();

    return res.status(200).json(ranking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao obter ranking" });
  }
};

module.exports = { addPlayerTime, getRanking };
