const prisma = require('../utils/prismaClient');

const getPredictionById = async (id) => {
  return prisma.predictRecord.findUnique({
    where: { id: id },
  });
};

const createPrediction = async (data) => {
  return prisma.predictRecord.create({ data });
};

module.exports = {
    getPredictionById,
    createPrediction
}
