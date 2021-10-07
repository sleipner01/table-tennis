// Retrieving data from "scoreData"- table at the bottom of body element 
var scoreData = document.getElementById("scoreData");
var names = [];

// For each row of info, make an object in names
for(let i = 0; i < scoreData.rows.length; i++) {
    var data = scoreData.rows[i].cells;
    names.push({name: data[0].innerText, score: data[1].innerText});
}
// Sort the names array
names.sort(function (a, b) {
    return b.score - a.score;
  });

// Retrieve the scoreboard element
var scoreboard = document.getElementById('scoreboard').children[1];
// For each object in "names", create a row in the scoreboard and add the values
names.forEach (function (item) {
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