const question = document.getElementById('question')
const player4 = document.getElementById('player4');

nodecg.listenFor('updateQuestion', (data) => {
    question.innerHTML = data.question
})

nodecg.listenFor('updatePlayers', (data) => {
    player4.innerHTML = data.player4
})