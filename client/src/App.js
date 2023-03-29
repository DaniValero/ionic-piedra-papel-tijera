import React from 'react';
import { setupIonicReact } from '@ionic/react';
import { IonApp } from '@ionic/react';
import Router from './model/router';
import '@ionic/react/css/core.css';
import Navbar from './model/Navbar';


setupIonicReact()

const App = () => (
  <IonApp>
    <Navbar/>
    <Router/>
  </IonApp>
);

export default App