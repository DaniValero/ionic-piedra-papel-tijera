import { IonHeader, IonTitle, IonToolbar, IonNavLink, IonButtons, IonButton } from '@ionic/react';
import MatchListView from '../views/MatchListView';

const Navbar = () => {
    return(
    <IonHeader>
      <IonToolbar>
        <IonNavLink routerLink="/home"><IonTitle>Prueba técnica</IonTitle></IonNavLink>
            <IonButtons slot="end">
            <IonNavLink routerLink="/match-history">
                <IonButton fill="solid"><IonNavLink routerLink="/match-history">Match History</IonNavLink></IonButton>
                <IonButton fill="solid"><IonNavLink routerDirection="forward" component={() => <MatchListView />}></IonNavLink></IonButton>
            </IonNavLink>
            </IonButtons>
        </IonToolbar>
    </IonHeader>
    )
}
export default Navbar;