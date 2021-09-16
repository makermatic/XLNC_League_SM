const p1Rep = nodecg.Replicant('p1Score', { defaultValue: 0 });
const p2Rep = nodecg.Replicant('p2Score', { defaultValue: 0 });
const p3Rep = nodecg.Replicant('p3Score', { defaultValue: 0 });
const p4Rep = nodecg.Replicant('p4Score', { defaultValue: 0 });

const question = document.getElementById('question');

const player1 = document.getElementById('P1')
const player2 = document.getElementById('P2')
const player3 = document.getElementById('P3')
const player4 = document.getElementById('P4')
const player5 = document.getElementById('P5')
const player6 = document.getElementById('P6')

const team1 = document.getElementById('team1')
const team2 = document.getElementById('team2')

function updatePlayers() {
    const data = { player1: player1.value, player2: player2.value, player3: player3.value, player4: player4.value, player5: player5.value, player6: player6.value }
    nodecg.sendMessage('updatePlayers', data)
}

function updateQuestion() {
    const data = { question: question.value }
    nodecg.sendMessage('updateQuestion', data)
}

function updateTeams() {
    const data = { team1: team1.value, team2: team2.value }
    nodecg.sendMessage('updateTeams', data)
}