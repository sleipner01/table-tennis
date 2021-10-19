
function getData() {
    // Retrieving data from "scoreData"- table at the bottom of body element 
    const scoreData = [
        'Andreas Ander Li',
        'Erlend Golten Persen',
        'Sander Godard',
        'Ole Andreas Egeland Rørvik',
        'Magnus Byrkjeland'
    ];
    var names = [];

    // For each row of info, make an object in names
    scoreData.forEach( memberName => {
        names.push({name: memberName, score: Math.floor(Math.random() * 100)});
    })

    // Sort the names array
    names.sort(function (a, b) {
        return b.score - a.score;
    });

    return names;
}



function makeScoreboard(data, scoreboard) {
    // Retrieve the scoreboard element
    var scoreboard = document.getElementById(scoreboard).children[1];
    // For each object in "names", create a row in the scoreboard and add the values
    data.forEach (function (item) {
        let row = document.createElement('tr');
        let name = document.createElement('td');
        name.innerHTML = item.name;
        let score = document.createElement('td');
        score.innerHTML = item.score
        score.classList.add('num')

        row.appendChild(name);
        row.appendChild(score);

        scoreboard.appendChild(row);
    })
}
makeScoreboard(getData(), 'scoreboard'); //Name of the table with data)