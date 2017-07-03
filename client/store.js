import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
    posts,
    comments
};

const middleware = routerMiddleware(browserHistory);

const store = createStore(rootReducer,
                         defaultState,
                         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                         applyMiddleware(middleware)
                        );

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default();
        store.replaceReducer(nextRootReducer);
    });
}

export default store;