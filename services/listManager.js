const store = require('../state/stateManager');

const list = (req, res) => {
  return store.getState();
};

module.exports = list;
