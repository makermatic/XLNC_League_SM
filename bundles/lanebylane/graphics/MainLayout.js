const question = document.getElementById('question')

// Player Name Vars
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player3 = document.getElementById('player3');
const player4 = document.getElementById('player4');

// Score Replicants
const p1Rep = nodecg.Replicant('p1score');
const p2Rep = nodecg.Replicant('p2Score');
const p3Rep = nodecg.Replicant('p3Score');
const p4Rep = nodecg.Replicant('p4Score');

//  Score Vars
const p1Score = document.getElementById('p1score');
const p2Score = document.getElementById('p2Score');
const p3Score = document.getElementById('p3Score');
const p4Score = document.getElementById('p4Score');

nodecg.listenFor('updateQuestion', (data) => {
    question.innerHTML = data.question
})

p1Rep.on('change', (newVal) => {
    p1Score.innerHTML = newVal;
})

p2Rep.on('change', (newVal) => {
    p2Score.innerHTML = newVal;
})

p3Rep.on('change', (newVal) => {
    p3Score.innerHTML = newVal;
})

p4Rep.on('change', (newVal) => {
    p4Score.innerHTML = newVal;
})