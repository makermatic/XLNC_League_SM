const a1 = document.getElementById('analyst1');
const a2 = document.getElementById('analyst2');

nodecg.listenFor('updateCasters', (data) => {
    a1.innerHTML = data.analyst1
    a2.innerHTML = data.analyst2
})

nodecg.listenFor('swapCasters', (data) => {
    a2.innerHTML = data.analyst1
    a1.innerHTML = data.analyst2
})