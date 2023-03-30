import { IonTitle, IonCard, IonButton } from "@ionic/react"
import React, {useState, useEffect} from "react"
import "../global.css"

const HistoryController = () => {



const [matches, setMatches] = useState([])
   

useEffect(() => {

    const getMatchData = () => {
        const storedMatches = JSON.parse(localStorage.getItem("matchData")) || [];
        setMatches(storedMatches)
    };
    getMatchData()
}, [])

    return (
        <>
            <div className="history-wrapper">

                {matches.length? <IonTitle className="history-title" >Your recent matches</IonTitle> : <IonTitle className="history-title">You have no recent match history to display</IonTitle>}

                {matches.reverse().map((e, i) => (
                    <IonCard key={i}>
                        <ion-card-header>
                        {e.winner === "Draw" ? <ion-card-title className="text-center">{"We had a draw!"}</ion-card-title> : <ion-card-title className="text-center">{e.winner + " Won"}</ion-card-title>}
                        </ion-card-header>
                        <ion-card-content>
                        Player got {e.player} and Computer got {e.computer}
                        </ion-card-content>
                    </IonCard>
                ))}

                {matches.length ? <IonButton fill="solid"  className="button-wrapper" routerLink="/home" routerDirection="forward" onClick={() => {localStorage.removeItem("matchData")}}>Reset history</IonButton> : <IonButton className="button-wrapper" fill="solid" routerLink="/home" routerDirection="forward">Play</IonButton>}
            </div>
        </>
    )

}

export default HistoryController