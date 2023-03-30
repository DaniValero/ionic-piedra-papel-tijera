import { IonButton, IonCard, IonToast } from "@ionic/react"
import React, {useState, useEffect} from "react"
import saveMatchData from "../model/SaveMatch"
import playerimg from "../assets/Player.jpg"
import computerimg from "../assets/computer.jpg"
import rock from "../assets/Rock.png"
import paper from "../assets/Paper.png"
import scissors from "../assets/Scissors.jpg"
import "../global.css"


const MatchController = () => {

    const [playerTurn, setPlayerTurn] = useState("")
    const [computerTurn, setComputerTurn] = useState("")
    const [player, setPlayer] = useState("")
    const [computer, setComputer] = useState("")
    const [reset, setReset] = useState(false)
    const [winner, setWinner] = useState()
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [showToast, setShowToast] = useState(false);
    
    // Gives each player a turn and renames it to identify "rock", "paper" or "scissors"

    const handleGame = () => {

        //Setting timeouts so turns are shown one at a time

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

    // Checks the turns , declares a winner and saves the match

    const handleWinner = () => {

        if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
            setWinner("Player") 
        } else if (player === computer) {
            setWinner("Draw")
        } else {
            setWinner("Computer")
        }
        setShowToast(true)
    }

    // Clears the state values when the button is pressed 

    const handleReset = () => {
        setComputer("")
        setPlayer("")
        setWinner("")
        setReset(true)
        handleGame()
    }


    // Handles the winner when there are state updates for the player or the computer

    useEffect( () => {
        if (player !== "" && computer !== "") {
          handleWinner();
        }
    }, [player, computer]);

    //Saves match details once a winner is declared

    useEffect( () => {
        if (winner === "Player" || winner === "Computer" || winner === "Draw") {
            saveMatchData(player, computer, winner)
        }
    }, [winner]);
    
    return (
        <>

            <ion-row class="game-wrapper">
                <ion-col size="5">
                    <IonCard className="player-card">
                        <ion-card-header>
                        <ion-card-title className="text-center">Player</ion-card-title>
                        <ion-card-subtitle>{player}</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content>
                            {player === "" && <img src={playerimg} alt='Player img' className="card-img"></img>}
                            {player === "Rock" && <img src={rock} alt='Player img' className="card-img"></img>}
                            {player === "Paper" && <img src={paper} alt='Player img' className="card-img"></img>}
                            {player === "Scissors" && <img src={scissors} alt='Player img' className="card-img"></img>}
                        </ion-card-content>
                    </IonCard>
                </ion-col>
                <h1 className="versus-text">VS</h1>
                <ion-col size="5">
                    <IonCard className="player-card">
                        <ion-card-header>
                        <ion-card-title>Computer</ion-card-title>
                        <ion-card-subtitle>{computer}</ion-card-subtitle>
                        </ion-card-header>
                        <ion-card-content>
                            {computer === "" && <img src={computerimg} alt='Player img' className="card-img"></img>}
                            {computer === "Rock" && <img src={rock} alt='Player img' className="card-img"></img>}
                            {computer === "Paper" && <img src={paper} alt='Player img' className="card-img"></img>}
                            {computer === "Scissors" && <img src={scissors} alt='Player img' className="card-img"></img>}
                        </ion-card-content>
                    </IonCard>
                </ion-col>
            </ion-row>
        
            <div className="button-wrapper">
                {player === "" && isButtonVisible && <IonButton className="main-button" onClick={() => handleGame() && setIsButtonVisible(false)}>Play</IonButton> }

                {player !== "" && winner !== ""  && player !== computer ? <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={`${winner} wins!`} duration={3000} />  : winner === "Draw" &&  <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message="Looks like we have a draw!" duration={3000} />}
                {player && computer !== "" && <IonButton className="main-button" onClick={() => handleReset()}>Play Again</IonButton>}
            </div>

       
        </>
    )




}

export default MatchController