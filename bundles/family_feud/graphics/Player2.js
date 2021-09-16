const question = document.getElementById('question')
const player2 = document.getElementById('player2');

nodecg.listenFor('updateQuestion', (data) => {
    question.innerHTML = data.question
})

nodecg.listenFor('updatePlayers', (data) => {
    player2.innerHTML = data.player2
})