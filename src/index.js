import React from 'react';
import { Platform } from 'react-native';
import ReactDOM from 'react-dom';
//import { KeepAwake, registerRootComponent } from 'expo';
import * as serviceWorker from './serviceWorker';

import App from './App';

if (Platform.OS === 'web') {
    ReactDOM.render(<App />, document.getElementById('root'));
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
} else {
    const { KeepAwake, registerRootComponent } = require('expo');
    // eslint-disable-next-line
    __DEV__ && KeepAwake.activate();
    registerRootComponent(App);
}
