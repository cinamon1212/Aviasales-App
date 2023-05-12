import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import { logger } from './middleWare/logger';
import { rootReducer } from './redux/reducers/rootReducer';
import { App } from './components/App/App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, reduxThunk)));

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
