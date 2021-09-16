// Team Vars
const question = document.getElementById('question')
const team1 = document.getElementById('team1')
const team2 = document.getElementById('team2')

nodecg.listenFor('updateQuestion', (data) => {
    question.innerHTML = data.question
})

nodecg.listenFor('updateTeams', (data) => {
    team1.innerHTML = data.team1
    team2.innerHTML = data.team2
})