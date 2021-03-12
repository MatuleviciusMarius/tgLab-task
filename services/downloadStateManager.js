const store = require('../state/stateManager');

const downloadState = (req, res) => {
  return res.json(store.getState());
};

module.exports = downloadState;
