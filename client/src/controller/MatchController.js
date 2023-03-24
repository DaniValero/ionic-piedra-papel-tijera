import { IonButton, IonCard, IonToast } from "@ionic/react"
import React, {useState, useEffect} from "react"
import handleResult from "../model/MatchModel"
import axios from "axios"
import "../global.css"


const MatchController = () => {

    const [playerTurn, setPlayerTurn] = useState("")
    const [computerTurn, setComputerTurn] = useState("")
    const [player, setPlayer] = useState("")
    const [computer, setComputer] = useState("")
    const [reset, setReset] = useState(false)
    const [winner, setWinner] = useState()
    const [showToast, setShowToast] = useState(false);

    
    // Gives each player a turn and renames it to identify "rock", "paper" or "scissors"

    const handleGame = async () => {
        setTimeout(() => {
            playerTurn === 0 && setPlayer("Rock")
            playerTurn === 1 && setPlayer("Paper")
            playerTurn === 2 && setPlayer("Scissors")
        }, 2000); 
        
        setTimeout(() => {
            computerTurn === 0 && setComputer("Rock")
            computerTurn === 1 && setComputer("Paper")
            computerTurn === 2 && setComputer("Scissors")
        }, 4000);

    }

    useEffect(() => {
        const getTurn = () => Math.floor(Math.random() * 3)
        setPlayerTurn(getTurn)
        setComputerTurn(getTurn)
        setReset(false)
    }, [reset])

    // Checks the turns and declares a winner 

    const handleWinner = async () => {

        if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
            setWinner("Player")
        } else if (player === computer) {
            setWinner("Draw")
        } else {
            setWinner("Computer")
        }

        await axios.post("http://localhost:5500/client/src/utils/api.php",
        {
            player: player,
            computer: computer,
            result: winner
        })
        .then((data) => console.log("Succes:", data))
        .catch((error) => {
            console.error('Error:', error);
        })

    }

    // Clears the state values when the button is pressed 

    const handleReset = () => {
        handleResult(player, computer, winner)
        setComputer("")
        setPlayer("")
        setWinner("")
        setReset(true)
    }


    // Handles the winner when there are state updates for the player or the computer

    useEffect(() => {
        if (player !== "" && computer !== "") {
          handleWinner();
        }
    }, [player, computer]);

    
    return (
        <>

            <ion-row class="game-wrapper">
                <ion-col size="6">
                    <IonCard className="player">
                        <ion-card-header>
                        <ion-card-title>Player</ion-card-title>
                        <ion-card-subtitle>{player}</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content>
                            Aquí va la foto
                        </ion-card-content>
                    </IonCard>
                </ion-col>
                <ion-col size="6">
                <IonCard className="player">
                        <ion-card-header>
                        <ion-card-title>Computer</ion-card-title>
                        <ion-card-subtitle>{computer}</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content>
                            Aquí va la foto
                        </ion-card-content>
                    </IonCard>
                </ion-col>
            </ion-row>
        
            <div className="button-wrapper">
                {player === "" && <IonButton className="main-button" onClick={() => handleGame()}>Play</IonButton> }

                {player !== "" && winner !== ""  && player !== computer ? <IonToast>{`Winner is ${winner}`}</IonToast> : winner === "Draw" && <IonToast>{`Looks like we have a ${winner}`}</IonToast>}

                {player && computer !== "" && <IonButton className="main-button" onClick={() => handleReset()}>Reset</IonButton>}
            </div>

       
        </>
    )




}

export default MatchController