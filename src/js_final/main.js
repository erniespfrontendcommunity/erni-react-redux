import '../css/main.css';
import store from './state';
import storage from './lib/storage';
import render from './view';

store.subscribe(() => {
  const newState = store.getState();
  storage.set('TODO_LIST_STATE', newState);
  render(document.getElementById('app'), newState, store);
});

render(document.getElementById('app'), store.getState(), store);


