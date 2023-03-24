import { IonButton, IonCard, IonContent } from "@ionic/react"
import React, {useState, useEffect} from "react"
import axios from "axios"

import "../global.css"

const MatchListView = () => {

    const [matches, setMatches] = useState({})
   

    useEffect(() => {

        const getMatches = async () => {
            await axios.get("http://localhost:5500/client/src/utils/api.php")
            .then((response) => setMatches(response.data))
            .catch((error) => {
            console.error('Error:', error);
          })
        }
        getMatches()
    }, [])
    


}

export default MatchListView