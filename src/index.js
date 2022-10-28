import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/Context';
import {Firebase} from './firebase/config';
import Context from './store/Context';

ReactDOM.render(
<FirebaseContext.Provider value={{Firebase: Firebase}}>
    <Context>
        <App />
        {/* This App is now the child component of Context */}
    </Context>
</FirebaseContext.Provider>
, document.getElementById('root'));
