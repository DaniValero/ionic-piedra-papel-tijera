import { IonTitle, IonCard } from "@ionic/react"
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
                {matches.length? <IonTitle>Your recent matches</IonTitle> : <IonTitle>You didn't play yet, go try it out!</IonTitle> }
                {matches.map((e, i) => (
                    <IonCard key={i}>
                        <ion-card-header>
                        {e.winner === "Draw" ? <ion-card-title className="text-center">{"We had a draw!"}</ion-card-title> : <ion-card-title className="text-center">{e.winner + " Won"}</ion-card-title>}
                        </ion-card-header>
                        <ion-card-content>
                        Player got {e.player} and Computer got {e.computer}
                        </ion-card-content>
                    </IonCard>
                ))}
            </div>
        </>
    )

}

export default HistoryController