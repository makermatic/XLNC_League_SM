const p1Rep = nodecg.Replicant('p1Score', { defaultValue: 0 });
const p2Rep = nodecg.Replicant('p2Score', { defaultValue: 0 });
const p3Rep = nodecg.Replicant('p3Score', { defaultValue: 0 });
const p4Rep = nodecg.Replicant('p4Score', { defaultValue: 0 });

const question = document.getElementById('question');

const player1 = document.getElementById('P1')
const player2 = document.getElementById('P2')
const player3 = document.getElementById('P3')
const player4 = document.getElementById('P4')

function updatePlayers() {
    const data = { player1: player1.value, player2: player2.value, player3: player3.value, player4: player4.value }
    nodecg.sendMessage('updatePlayers', data)
}

function updateQuestion() {
    const data = { question: question.value }
    nodecg.sendMessage('updateQuestion', data)
}

function addP1() {
    p1Rep.value = p1Rep.value + 100
}

function subtractP1() {
    p1Rep.value = p1Rep.value - 100
}

function addP2() {
    p2Rep.value = p2Rep.value + 100
}

function subtractP2() {
    p2Rep.value = p2Rep.value - 100
}

function addP3() {
    p3Rep.value = p3Rep.value + 100
}

function subtractP3() {
    p3Rep.value = p3Rep.value - 100
}

function addP4() {
    p4Rep.value = p4Rep.value + 100
}

function subtractP4() {
    p4Rep.value = p4Rep.value - 100
}

function resetScores() {
    p1Rep.value = 0
    p2Rep.value = 0
    p3Rep.value = 0
    p4Rep.value = 0
}