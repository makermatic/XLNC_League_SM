const question = document.getElementById('question')
const player5 = document.getElementById('player5');

nodecg.listenFor('updateQuestion', (data) => {
    question.innerHTML = data.question
})

nodecg.listenFor('updatePlayers', (data) => {
    player5.innerHTML = data.player5
})