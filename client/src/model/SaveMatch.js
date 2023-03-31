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