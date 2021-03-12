const scanManager = require('../../../services/scanManager');

const scan = async (req, res) => {
  const result = await scanManager(req, res);
  return result;
};

module.exports = scan;
