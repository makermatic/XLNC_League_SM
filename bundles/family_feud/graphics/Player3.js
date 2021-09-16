const question = document.getElementById('question')
const player3 = document.getElementById('player3');

nodecg.listenFor('updateQuestion', (data) => {
    question.innerHTML = data.question
})

nodecg.listenFor('updatePlayers', (data) => {
    player3.innerHTML = data.player3
})