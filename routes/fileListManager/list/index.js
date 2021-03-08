const listManager = require('../../../services/listManager');

const list = (req, res) => {
  const result = listManager(req, res);
  return result;
};

module.exports = list;
