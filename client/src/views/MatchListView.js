import { IonPage, IonContent } from "@ionic/react"
import React from "react"
import HistoryController from "../controller/HistoryController"
import "../global.css"

const MatchListView = () => {
    
    return (
        <IonPage>
            <IonContent>
             <HistoryController/>
            </IonContent>
        </IonPage>
        
    )

}

export default MatchListView