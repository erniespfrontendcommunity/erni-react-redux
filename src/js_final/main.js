import '../css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import store from './state';
import storage from './lib/storage';

const rootElement = document.getElementById('app');

store.subscribe(() => {
  const newState = store.getState();

  // When store is updated it is saved in browser's localStorage
  storage.set('TODO_LIST_STATE', newState);

  render(rootElement, newState, store);
});

render(rootElement, store.getState());

// HMR interface
if (module.hot) {
  // Capture hot update
  module.hot.accept('./components/App', () => {
    render(rootElement, store.getState());
  });
}

function render(el, state) {
  ReactDOM.render(
    <AppContainer>
      <App todos={state.todos} filter={state.filter} store={store} />
    </AppContainer>
  , el);
}