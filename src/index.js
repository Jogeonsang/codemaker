
import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/CodeMaker/App';
import registerServiceWorker from './registerServiceWorker';

// Redux 불러오기
import { createStore } from 'redux';
import reducers from './redux/codemaker/reducer';
import {Provider} from 'react-redux';


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
