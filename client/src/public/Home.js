import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonNavLink, IonButtons, IonButton, IonNav } from '@ionic/react';
import React from 'react';
import '@ionic/react/css/core.css'
import '@ionic/react/css/structure.css'
import MatchController from '../controller/MatchController';
import MatchListView from '../views/MatchListView';

function Home() {

  return (
  <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Prueba técnica</IonTitle>
            <IonButtons slot="end">
            <IonNav root={() => <MatchController />}></IonNav> 
            <IonNavLink routerDirection="forward" component={() => <MatchListView/>}> <IonButton fill='solid'>Match History</IonButton></IonNavLink>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <MatchController />
      </IonContent>
    </IonPage>
  </>
  );
}

export default Home;
