import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import '@ionic/react/css/core.css'
import '@ionic/react/css/structure.css'
import MatchController from '../controller/MatchController';

function Home() {

  return (
  <>
   <IonPage>
    <IonContent>
      <MatchController />
    </IonContent>
  </IonPage>
  </>
  );
}

export default Home;
