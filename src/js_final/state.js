import { combineReducers, createStore } from 'redux';
import storage from './lib/storage';
import uuid from 'uuid';

const storedState = storage.get('TODO_LIST_STATE');

const initialTodos = storedState ? storedState.todos : [
    {
        id: uuid.v4(),
        text: 'Take a look at the application',
        done: true
    },
    {
        id: uuid.v4(),
        text: 'Add ability to filter todos',
        done: false
    },
    {
        id: uuid.v4(),
        text: 'Filter todos by status',
        done: false
    },
    {
        id: uuid.v4(),
        text: 'Filter todos by text',
        done: false
    }
];

const initialFilter = storedState ? storedState.filter : 'SHOW_ALL';

const todo = (state, action) => {

  switch (action.type) {

    case 'ADD_TODO':
      return {
        id: uuid.v4(),
        text: action.text,
        done: false
      };

    case 'TODO_TOGGLE_DONE':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        done: !state.done
      });

    default:
      return state;
  }
};

const todos = (state = initialTodos, action) => {

  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];

    case 'TODO_TOGGLE_DONE':
      return state.map(t =>
        todo(t, action)
      );

    default:
      return state;
  }
};

const filter = (state = initialFilter, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const appReducer = combineReducers({ todos, filter });
const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
