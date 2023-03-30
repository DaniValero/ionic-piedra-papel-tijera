import React from 'react';
import { Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from '../views/Home';
import MatchListView from '../views/MatchListView';


const Router = () => {
  return (
    <>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home}  />
        <Route path="/" component={Home} exact />
        <Route path="/match-history" component={MatchListView} exact/>
      </IonRouterOutlet>
    </IonReactRouter>
    </>
  );
};

export default Router;