const downloadStateManager = require('../../../services/downloadStateManager');

const download = (req, res) => {
  const result = downloadStateManager(req, res);
  return result;
};

module.exports = download;
