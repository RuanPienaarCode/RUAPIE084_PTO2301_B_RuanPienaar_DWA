import {} from './libs/lit.html';
import { app } from './view/app.js';
import { getState } from './model/store.js';

// const state = getState();
const view = app(state);
render(view, document.querySelector('[data-app]'));
