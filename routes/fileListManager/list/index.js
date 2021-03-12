const listManager = require('../../../services/listManager');

const list = (req, res) => {
  const result = listManager(req, res);
  const serialized = serializer(result);
  return res.json(serialized);
};

function serializer(response) {
  return response.files.map((item) => ({
    name: item.name,
    active: item.active,
  }));
}

module.exports = list;
