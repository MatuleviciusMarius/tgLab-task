const { createStore } = require('redux');

const initialState = {
  files: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FILE': {
      state.files = [...state.files, action.newFile];
      return state;
    }
    case 'UPDATE_FILE': {
      state.files.map((file, index) => {
        if (file.name === action.file.name) {
          state.files[index] = action.file;
        }
      });
      return state;
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('Store changed: ', store.getState());
});

module.exports = store;
