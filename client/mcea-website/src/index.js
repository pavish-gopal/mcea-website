import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//redux imports
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
//importing reducers
import reducer from'./reducers';

const store = createStore(reducer,compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
        <App style={{backgroundColor:'black'}}/>
      
    </Provider>
    
  </React.StrictMode>
);
