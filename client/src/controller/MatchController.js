import { IonButton, IonCard } from "@ionic/react"
import React, {useState, useEffect} from "react"
import handleResult from "../model/MatchModel"


const MatchController = () => {

    const [playerTurn, setPlayerTurn] = useState("")
    const [computerTurn, setComputerTurn] = useState("")
    const [player, setPlayer] = useState("")
    const [computer, setComputer] = useState("")
    const [reset, setReset] = useState(false)
    const [winner, setWinner] = useState()

    
    // Gives each player a turn and renames it to identify "rock", "paper" or "scissors"

    const handleGame = async () => {
        playerTurn === 0 && setPlayer("Rock")
        playerTurn === 1 && setPlayer("Paper")
        playerTurn === 2 && setPlayer("Scissors")

        computerTurn === 0 && setComputer("Rock")
        computerTurn === 1 && setComputer("Paper")
        computerTurn === 2 && setComputer("Scissors")
    }

    useEffect(() => {
        const getTurn = () => Math.floor(Math.random() * 3)
        setPlayerTurn(getTurn)
        setComputerTurn(getTurn)
        setReset(false)
    }, [reset])

    // Checks the turns and declares a winner 

    const handleWinner = () => {

        if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
            setWinner("Player")
        } else if (player === computer) {
            setWinner("Draw")
        } else {
            setWinner("Computer")
        }

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
        {player === "" && <IonButton onClick={() => handleGame()}>Play</IonButton>}
        
        <div>
            <IonCard>{player}</IonCard>
            <IonCard>{computer}</IonCard>
            {player !== "" && winner !== "" && player !== computer ? <IonCard>{`Winner is ${winner}`}</IonCard> :  <IonCard>{`Looks like we have a ${winner}`}</IonCard>}
        </div>

        {player && computer !== "" && <IonButton onClick={() => handleReset()}>Reset</IonButton>}
        </>
    )




}

export default MatchController