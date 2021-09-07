const LCaster = document.getElementById('leftCaster');
const RCaster = document.getElementById('rightCaster');

const a1 = document.getElementById('analyst1');
const a2 = document.getElementById('analyst2');

nodecg.listenFor('updateCasters', (data) => {
    LCaster.innerHTML = data.leftCaster
    RCaster.innerHTML = data.rightCaster
    a1.innerHTML = data.analyst1
    a2.innerHTML = data.analyst2
})

nodecg.listenFor('swapCasters', (data) => {
    RCaster.innerHTML = data.leftCaster
    LCaster.innerHTML = data.rightCaster
    a2.innerHTML = data.analyst1
    a1.innerHTML = data.analyst2
})