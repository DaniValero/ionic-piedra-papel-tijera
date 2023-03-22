import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import '@ionic/react/css/core.css';

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
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  <h1>Adios</h1>
  </>
  );
}

export default Home;
