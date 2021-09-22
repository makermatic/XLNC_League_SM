const question = document.getElementById('question')
const player3 = document.getElementById('player4');
const p3Rep = nodecg.Replicant('p4Score');
const p3Score = document.getElementById('p4Score');

nodecg.listenFor('updateQuestion', (data) => {
    question.innerHTML = data.question
})

nodecg.listenFor('updatePlayers', (data) => {
    player4.innerHTML = data.player4
})

p4Rep.on('change', (newVal) => {
    p4Score.innerHTML = newVal;
})