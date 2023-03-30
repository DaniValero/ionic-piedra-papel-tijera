import { IonHeader, IonTitle, IonToolbar, IonNavLink, IonButtons, IonButton } from '@ionic/react';


const Navbar = () => {
    return (
      <IonHeader>
        <IonToolbar>
            <IonTitle>Prueba técnica</IonTitle>
            <IonButtons slot="end">
            <IonButton fill="solid" routerLink="/home" routerDirection="forward">Home</IonButton>
            <IonButton fill="solid" routerLink="/match-history" routerDirection="forward">Match History</IonButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
    );
  };
  
  export default Navbar;