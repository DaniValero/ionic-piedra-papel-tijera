import React from 'react';
import { Route } from 'react-router-dom';
import { setupIonicReact } from '@ionic/react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './public/Home';
import '@ionic/react/css/core.css';
import MatchListView from './views/MatchListView';

setupIonicReact()

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/" component={Home} exact={true} />
        <Route path="/matches" component={MatchListView} exact={true} />
        {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App