const { cloningSteps } = require("jsdom/lib/jsdom/living/helpers/internal-constants");

const gameObject = () => 
    { return {

        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black"," White"],
            players: 
            {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1

                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7

                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 9,
                    blocks: 1,
                    slamDunks: 15

                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5

                },
            "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1

                },

            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise"," Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2

            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,

            },
            "DeSagna Diop": {
               number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,

            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,

            },
            "Brendan Haywood": {
                number:33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,

            }


           }}    
}}

// console.dir(gameObject(),{depth:null});

    function numPointsScored(playerName) {
        let game = gameObject();
      
        for (let gameKey in game) {
          let teamObj = game[gameKey];
          for (let teamKey in teamObj) {
            let data = teamObj[teamKey];
            if (teamKey === 'players') { 
    
            for (let key in data) {
                if (key === playerName) { 
                    return`${playerName} has scored  ${data[key].points} points.`;
                }
            }
          }
        }
    }
      
        return null; 
      }
      
      console.log(numPointsScored("Brendan Haywood"))
      console.log(numPointsScored("Reggie Evans"))

   
      function shoeSize(playerName) {
        let game = gameObject();
      
        for (let gameKey in game) {
          let teamObj = game[gameKey];
          for (let teamKey in teamObj) {
            let data = teamObj[teamKey];
            if (teamKey === 'players') { 
    
            for (let key in data) {
                if (key === playerName) { 
                    return` The shoe size of ${playerName} is  ${data[key].shoe} .`;
                }
            }
          }
        }
    }
      
        return null; // Player not found
      }
      
      console.log(shoeSize("Reggie Evans"))

      
      
      function teamColors(teamName){
        let game = gameObject();
      
        for (let gameKey in game) {
            let teamObj = game[gameKey];
            if (teamObj.teamName === teamName) {
                return  teamObj.colors;
            }
        }
return null;
      }
      console.log(teamColors("Brooklyn Nets"));
      console.log(teamColors("Charlotte Hornets"));


      function teamNames(){
      
      
        let game = gameObject();
        let names = [];
    
        for (let gameKey in game) {
            let teamObj = game[gameKey];
            names.push(teamObj.teamName);
        }
    
        return names;
    }

      
      console.log(teamNames());

//
      function playerNumbers(teamName)
      {
        let game = gameObject();
        let array = [];
        for (let gameKey in game) {
            let teamObj = game[gameKey];
            if (teamObj.teamName === teamName) {
                for (let teamKey in teamObj) {
                    if (teamKey === 'players') {
                        for (let playerKey in teamObj[teamKey]) {
                            array.push(teamObj[teamKey][playerKey].number);
                        }
                    }
                }
            }
        }
    
        return "The list of the players numbers "+array;
    }
      console.log(playerNumbers('Brooklyn Nets'));


      function playerStats(playerName)
      {
        let game = gameObject();

        for (let gameKey in game) {
            let teamObj = game[gameKey];
            for (let teamKey in teamObj) {
                if (teamKey === 'players') {
                    if (teamKey === 'players' && teamObj[teamKey][playerName]) {
                        return teamObj[teamKey][playerName];
                    }
                }
            }
        }
    
        return null; 
    }
console.log(playerStats("Reggie Evans"))


function bigShoeRebounds() {
    let game = gameObject();
    let largeShoeSize = 0;
    let largestShoeSizePlayer = null;

    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'players') {
                for (let playerName in teamObj[teamKey]) {
                    const player = teamObj[teamKey][playerName];
                    if (player.shoe > largeShoeSize) {
                        largeShoeSize = player.shoe;
                        largestShoeSizePlayer = player;
                    }
                }
            }
        }
    }

    if (largestShoeSizePlayer) {
        return  largestShoeSizePlayer.rebounds;
    } else {
        return null; 
    }
}

console.log(bigShoeRebounds())



function mostPointsScored() {
    let game = gameObject();
    let playerWithMostPoints = null;
    let Points = 0;

    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'players') {
                for (let playerName in teamObj[teamKey]) {
                    const player = teamObj[teamKey][playerName];
                    if (player.points > Points) {
                        Points = player.points;
                        playerWithMostPoints = playerName;
                    }
                }
            }
        }
    }

    return `${playerWithMostPoints} has the most points of ${Points}`
}

console.log(mostPointsScored());


function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'players') {
                for (let playerName in teamObj[teamKey]) {
                    const player = teamObj[teamKey][playerName];
                    if (gameKey === 'home') {
                        homePoints += player.points;
                    } else if (gameKey === 'away') {
                        awayPoints += player.points;
                    }
                }
            }
        }
    }

    if (homePoints > awayPoints) {
        return `${game.home.teamName} is the team with the most points of ${homePoints} `;
    } else if (awayPoints > homePoints) {
        return `${game.away.teamName} is the team with the most points of ${awayPoints} `;
    } else {
        return "Both teams has the same points ";
    }
}


console.log(winningTeam());



function playerWithLongestName() {
    let game = gameObject();
    let longestNamePlayer = null;
    let longestLength = 0;

    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'players') {
                for (let playerName in teamObj[teamKey]) {
                    const playerNameLength = playerName.length;
                    if (playerNameLength > longestLength) {
                        longestLength = playerNameLength;
                        longestNamePlayer = playerName;
                    }
                }
            }
        }
    }

    return `${longestNamePlayer} is the player with longest name`;
}


console.log(playerWithLongestName());







function doesLongNameStealATon() {
    let game = gameObject();
    let longestNamePlayer = null;
    let longestNameLength = 0;

    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'players') {
                for (let playerName in teamObj[teamKey]) {
                    const player = teamObj[teamKey][playerName];
                    const playerNameLength = playerName.length;
                    if (playerNameLength > longestNameLength) {
                        longestNameLength = playerNameLength;
                        longestNamePlayer = playerName;
                    }
                }
            }
        }
    }

    if (!longestNamePlayer) {
        return false; 
    }

    
    let mostStealsPlayer = null;
    let mostSteals = 0;

    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let teamKey in teamObj) {
            if (teamKey === 'players') {
                for (let playerName in teamObj[teamKey]) {
                    const player = teamObj[teamKey][playerName];
                    if (player.steals > mostSteals) {
                        mostSteals = player.steals;
                        mostStealsPlayer = playerName;
                    }
                }
            }
        }
    }

    return longestNamePlayer === mostStealsPlayer;
}


console.log(doesLongNameStealATon());



