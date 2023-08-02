// Mark Klingelhoefer
// IU Basketball Stat Finder
// Find the season stats or stats from a specific game 
// of any IU player that scored during the 2022-23 season

// Allows program to get user input
const prompt = require("prompt-sync")();   

// Contains stats of players
const roster = {
    'Trayce Jackson-Davis': {
        pts: 20.9,
        reb: 10.8,
        ast: 4.0,
        stl: 0.8,
        blk: 2.9,
        games: {
            'Kent State': {
                pts: 24,
                reb: 11,
                ast: 5,
                stl: 1,
                blk: 5 
            },
            'Purdue': {
                pts: 17.5,
                reb: 7.5,
                ast: 4,
                stl: 0,
                blk: 1,

                '2/4': {
                    pts: 25,
                    reb: 7,
                    ast: 1,
                    stl: 0,
                    blk: 1
                },

                '2/25': {
                    pts: 10,
                    reb: 8,
                    ast: 7,
                    stl: 0,
                    blk: 1
                }
            }
        }
    },
    'Jalen Hood-Schifino': {
        pts: 13.5,
        reb: 4.1,
        ast: 3.7,
        stl: 0.8,
        blk: 0.3,
        games: {
            'Kent State': {
                pts: 8,
                reb: 4,
                ast: 3,
                stl: 1,
                blk: 0
            },

            'Purdue': {
                '2/4': {
                    pts: 16,
                    reb: 0,
                    ast: 4,
                    stl: 2,
                    blk: 0
                },

                '2/25': {
                    pts: 35,
                    reb: 7,
                    ast: 2,
                    stl: 1,
                    blk: 1
                }
            }
        }
    },
    'Xavier Johnson': {
        pts: 9.9,
        reb: 3.3,
        ast: 4.9,
        stl: 1.2,
        blk: 0.0
    },
    'Race Thompson': {
        pts: 8.4,
        reb: 5.2,
        ast: 1.0,
        stl: 1.0,
        blk: 0.9,
        games: {
            'Kent State': {
                pts: 20,
                reb: 9,
                ast: 0,
                stl: 1,
                blk: 1
            }
        }
    },
    'Miller Kopp': {
        pts: 8.1,
        reb: 2.5,
        ast: 1.2,
        stl: 0.7,
        blk: 0.1,
        games: {
            'Kent State': {
                pts: 13,
                reb: 5,
                ast: 2,
                stl: 0,
                blk: 0
            }
        }
    },
    'Trey Galloway': {
        pts: 6.7,
        reb: 3.0,
        ast: 2.1,
        stl: 0.7,
        blk: 0.1,
        games: {
            'Kent State': {
                pts: 2,
                reb: 4,
                ast: 4,
                stl: 0,
                blk: 0
            }
        }
    },
    'Malik Reneau': {
        pts: 6.1,
        reb: 3.7,
        ast: 0.8,
        stl: 0.5,
        blk: 0.3,
        games: {
            'Kent State': {
                pts: 4,
                reb: 3,
                ast: 0,
                stl: 0,
                blk: 1
            }
        }
    },
    'Tamar Bates': {
        pts: 6.1,
        reb: 1.6,
        ast: 1.1,
        stl: 0.5,
        blk: 0.1,
        games: {
            'Kent State': {
                pts: 0,
                reb: 2,
                ast: 0,
                stl: 1,
                blk: 0
            }
        }
    },
    'Jordan Geronimo': {
        pts: 4.2,
        reb: 2.4,
        ast: 0.3,
        stl: 0.5,
        blk: 0.9,
        games: {
            'Kent State': {
                pts: 0,
                reb: 1,
                ast: 0,
                stl: 0,
                blk: 0
            }
        }
    },
    'Logan Duncomb': {
        pts: 2.9,
        reb: 1.7,
        ast: 0.2,
        stl: 0.1,
        blk: 0.6
    },
    'Kaleb Banks': {
        pts: 2.0,
        reb: 0.9,
        ast: 0.3,
        stl: 0.2,
        blk: 0.1
    },
    'CJ Gunn': {
        pts: 2.0,
        reb: 0.6,
        ast: 0.4,
        stl: 0.5,
        blk: 0.1
    },
    'Anthony Leal': {
        pts: 0.2,
        reb: 0.2,
        ast: 0.1,
        stl: 0.1,
        blk: 0.0
    }
}

// Returns season stats for player entered
const returnStats = player => {
    // If player's last name doesn't end in 's' (grammar purposes)
    if (player.slice(-1) != 's') {
        console.log(`${player}'s stats per game (2022-23 season):`)
        console.log(`PTS: ${roster[player].pts}`);
        console.log(`REB: ${roster[player].reb}`);
        console.log(`AST: ${roster[player].ast}`);
        console.log(`STL: ${roster[player].stl}`);
        console.log(`BLK: ${roster[player].blk}`);
    // If player's last name ends in 's' (grammar purposes)
    } else {
        console.log(`${player}' stats per game (2022-23 season):`)
        console.log(`PTS: ${roster[player].pts}`);
        console.log(`REB: ${roster[player].reb}`);
        console.log(`AST: ${roster[player].ast}`);
        console.log(`STL: ${roster[player].stl}`);
        console.log(`BLK: ${roster[player].blk}`);
    }
}

// Returns stats for specific game, date is only required if
// opponent was played more than once this season
const gameFinder = (player, opponent, date) => {
    // If date was entered and player's last name doesn't end in 's' (grammar purposes)
    // Checked
    if (date != '' && player.slice(-1) != 's') {
        console.log(`${player}'s stats for game vs. ${opponent} on ${date}, 2023:`)
        console.log(`PTS: ${roster[player].games[opponent][date].pts}`);
        console.log(`REB: ${roster[player].games[opponent][date].reb}`);
        console.log(`AST: ${roster[player].games[opponent][date].ast}`);
        console.log(`STL: ${roster[player].games[opponent][date].stl}`);
        console.log(`BLK: ${roster[player].games[opponent][date].blk}`);
    // If date was entered player's last name ends in 's' (grammar purposes)
    // Checked
    } else if (date != '' && player.slice(-1) === 's') {
        console.log(`${player}' stats for game vs. ${opponent} on ${date}, 2023:`)
        console.log(`PTS: ${roster[player].games[opponent][date].pts}`);
        console.log(`REB: ${roster[player].games[opponent][date].reb}`);
        console.log(`AST: ${roster[player].games[opponent][date].ast}`);
        console.log(`STL: ${roster[player].games[opponent][date].stl}`);
        console.log(`BLK: ${roster[player].games[opponent][date].blk}`);
    // If date was not entered and player's last name doesn't end in 's' (grammar purposes)
    // Checked
    } else if (date === '' && player.slice(-1) != 's') {
        console.log(`${player}'s stats against ${opponent} (2022-23 season):`);
        console.log(`PTS: ${roster[player].games[opponent].pts}`);
        console.log(`REB: ${roster[player].games[opponent].reb}`);
        console.log(`AST: ${roster[player].games[opponent].ast}`);
        console.log(`STL: ${roster[player].games[opponent].stl}`);
        console.log(`BLK: ${roster[player].games[opponent].blk}`);
    // If date was not entered and player's last name ends in 's' (grammar purposes)
    // Checked
    } else if (date === '' && player.slice(-1) === 's') {
        console.log(`${player}' stats against ${opponent} (2022-23 season):`);
        console.log(`PTS: ${roster[player].games[opponent].pts}`);
        console.log(`REB: ${roster[player].games[opponent].reb}`);
        console.log(`AST: ${roster[player].games[opponent].ast}`);
        console.log(`STL: ${roster[player].games[opponent].stl}`);
        console.log(`BLK: ${roster[player].games[opponent].blk}`);
    // Error message
    } else {
        console.log("Error.");
        console.log("1. Did you enter a valid player, opponent, and date?");
        console.log("2. If you entered an opponent that IU played more than once, did you enter the date of the game you want the stats for?")
    };
};

// Takes player input and capitalizes first and last name (even if hyphenated)
let player = (prompt(`Enter the name of the player you want to find stats for (Make sure you include dashes in the name if they have them, such as Trayce Jackson-Davis): \n`)).replace(/\b[\w']+\b/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
// Takes opponent and capitalizes
let opponent = (prompt('If you want to find stats against a specific opponent, enter the opponent here (EX: Michigan, Minnesota, Illinois). If not, hit enter: \n')).replace(/\b[\w']+\b/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
// Takes date of game
let date = prompt('If you entered an opponent that played IU more than once, enter the date of the game you want to find the stats for by typing month/day (EX: 2/4, 2/7). Hit enter to leave blank: \n');

// If user enters player and nothing else
if (player && opponent === '' && date === '') {
    // If player exists in roster object, return stats
    if (roster[player]) {
        returnStats(player);
    // If player doesn't exist, return error
    } else {
        console.log('Player not found. Did you enter a valid player?')
    }
// If user enters player & opponent but no date
} else if (player && opponent && date === '') {
    // If player and opponent exists in roster object, return stats
    if (roster[player] && roster[player].games[opponent]) {
        gameFinder(player, opponent, date);
    // If player or opponent doesn't exist, return error
    } else {
        console.log('Player or opponent not found. Did you enter a valid player and opponent?')
    }
} else if (player && opponent && date) {
    // If player, opponent, and date exists in roster object, return stats
    if (roster[player] && roster[player].games[opponent] && roster[player].games[opponent][date]) {
        gameFinder(player, opponent, date);
    // If player, opponent, or date doesn't exist, return error
    } else {
        console.log('Player, opponent, or date not found. Did you enter a valid player, opponent, and game date?')
    }
}

// returnStats('Trayce Jackson-Davis');
// gameFinder('Trayce Jackson-Davis', 'Purdue', '2/4');
// gameFinder('Trayce Jackson-Davis', 'Kent State');