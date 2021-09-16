const question = document.getElementById('question')
const player1 = document.getElementById('player1');

nodecg.listenFor('updateQuestion', (data) => {
    question.innerHTML = data.question
})

nodecg.listenFor('updatePlayers', (data) => {
    player1.innerHTML = data.player1
})