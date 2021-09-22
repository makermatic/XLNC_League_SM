const question = document.getElementById('question')
const player2 = document.getElementById('player2');
const p2Rep = nodecg.Replicant('p2Score');
const p2Score = document.getElementById('p2Score');

nodecg.listenFor('updateQuestion', (data) => {
    question.innerHTML = data.question
})

nodecg.listenFor('updatePlayers', (data) => {
    player2.innerHTML = data.player2
})

p2Rep.on('change', (newVal) => {
    p2Score.innerHTML = newVal;
    nodecg.playSound('yam')
})