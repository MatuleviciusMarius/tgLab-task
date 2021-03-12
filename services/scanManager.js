const fs = require('fs');
const _ = require('lodash');
const store = require('../state/stateManager');

const scan = async (req, res) => {
  const path = req.query.path;
  const currentStateFiles = store.getState().files;
  if (!path) return res.status(400).send({ message: 'Invalid path' });

  fs.readdir(path, async (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    updateMissingFilesStatus(getMissingFiles(currentStateFiles, files));
    addNewFiles(files, currentStateFiles);
    return res.status(200).send();
  });
};

function getMissingFiles(oldFiles, newFilesNames) {
  let oldFilesNames = [];
  oldFiles.map((file) => {
    oldFilesNames = [...oldFilesNames, file.name];
  });
  return _.without(oldFilesNames, ...newFilesNames);
}

function addNewFiles(files, currentStateFiles) {
  files.forEach((file) => {
    if (checkIfAlreadyExists(currentStateFiles, file)) {
      if (file.active === false) {
        file.active = true;
        store.dispatch({
          type: 'UPDATE_FILE',
          newFile: file,
        });
      }
      return;
    }
    store.dispatch({
      type: 'ADD_FILE',
      newFile: { name: file, active: true },
    });
  });
}

function checkIfAlreadyExists(files, fileName) {
  let fileExists = false;
  files.forEach((file) => {
    if (file.name == fileName) {
      fileExists = true;
    }
  });
  return fileExists;
}

function updateMissingFilesStatus(missingFiles) {
  missingFiles.forEach((fileName) => {
    store.dispatch({
      type: 'UPDATE_FILE',
      file: {
        name: fileName,
        active: false,
      },
    });
  });
}

module.exports = scan;
