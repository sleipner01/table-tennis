
function getData() {
    // Since we can't use a database to store values, we use a temporary list to store som example-names
    const scoreData = [
        'Andreas Ander Li',
        'Erlend Golten Persen',
        'Sander Maurice Godard',
        'Ole Andreas Egeland Rørvik',
        'Magnus Byrkjeland'
    ];
    var scores = [];

    // Getting *scores* and names from scoreData array make an object in scores
    scoreData.forEach( memberName => {
        // Since we can't use databases we are currently making a random score to simulate a working scoreboardEl
        scores.push({name: memberName, score: Math.floor(Math.random() * 100)});
    })

    // Sort the scores array
    scores.sort(function (a, b) {
        return b.score - a.score;
    });

    return scores;
}



function makeScoreboard(data, scoreboardEl) {
    // Retrieve the scoreboardEl element
    var scoreboardEl = document.getElementById(scoreboardEl).children[1];
    // For each object in "scores", create a row in the scoreboardEl and add the values
    data.forEach (function (item) {
        let row = document.createElement('tr');
        let name = document.createElement('td');
        name.innerHTML = item.name;
        let score = document.createElement('td');
        score.innerHTML = item.score
        score.classList.add('num')

        row.appendChild(name);
        row.appendChild(score);

        scoreboardEl.appendChild(row);
    })
}
makeScoreboard(getData(), 'scoreboard'); //Name of the table with data)