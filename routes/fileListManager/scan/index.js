const scanManager = require('../../../services/scanManager');

const scan = (req, res) => {
  const result = scanManager(req, res);
  return result;
};

module.exports = scan;
