import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, {useState} from 'react';
import MatchController from '../controller/MatchController';
import '@ionic/react/css/core.css'

function Home() {

  return (
  <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Prueba técnica</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <MatchController />
      </IonContent>
    </IonPage>
  </>
  );
}

export default Home;
