const question = document.getElementById('question')
const player3 = document.getElementById('player3');
const p3Rep = nodecg.Replicant('p3Score');
const p3Score = document.getElementById('p3Score');

nodecg.listenFor('updateQuestion', (data) => {
    question.innerHTML = data.question
})

nodecg.listenFor('updatePlayers', (data) => {
    player3.innerHTML = data.player3
})

p3Rep.on('change', (newVal) => {
    p3Score.innerHTML = newVal;
})