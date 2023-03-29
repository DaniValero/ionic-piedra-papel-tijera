// const saveMatchData = (player, computer, winner) => {
  
//   const matchData = {
//     player,
//     computer,
//     winner,
//   };
//   console.log(matchData)

//   // if (localStorage.getItem("matchData") === undefined) {
//   //   localStorage.setItem("matchData", []).push(JSON.stringify(matchData))
//   // } 

//   // localStorage.setItem("matchData", JSON.stringify(matchData));

//   const storedMatches = JSON.parse(localStorage.getItem("matchData"));
//   console.log(storedMatches)

//   if (storedMatches === null) {
//     localStorage.setItem("matchData", [])
//   }

//   else if (storedMatches.length >= 10) {
//     storedMatches.shift(); // Remove the oldest match if there are 10+
//   }

//   storedMatches.push(matchData); // Add the new match
//   localStorage.setItem("matchData", JSON.stringify(storedMatches));

    
//   };

// export default saveMatchData;

const saveMatchData = (player, computer, winner) => {
  const matchData = {
    player,
    computer,
    winner,
  };

  const storedMatches = JSON.parse(localStorage.getItem("matchData")) || [];

  if (storedMatches.length >= 10) {
    storedMatches.shift(); // Remove the oldest match if there are 10+
  }

  storedMatches.push(matchData); // Add the new match

  localStorage.setItem("matchData", JSON.stringify(storedMatches));
};

export default saveMatchData;