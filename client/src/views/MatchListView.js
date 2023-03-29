import { IonPage, IonContent, IonTitle } from "@ionic/react"
import React, {useState, useEffect} from "react"
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