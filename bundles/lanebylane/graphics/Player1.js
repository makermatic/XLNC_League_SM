const question = document.getElementById('question')
const player1 = document.getElementById('player1');
const p1Rep = nodecg.Replicant('p1Score');
const p1Score = document.getElementById('p1Score');

nodecg.listenFor('updateQuestion', (data) => {
    question.innerHTML = data.question
})

nodecg.listenFor('updatePlayers', (data) => {
    player1.innerHTML = data.player1
})

p1Rep.on('change', (newVal) => {
    p1Score.innerHTML = newVal;
    nodecg.playSound('yam')
})