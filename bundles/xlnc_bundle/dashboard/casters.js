const leftCaster = document.getElementById('leftCaster')
const rightCaster = document.getElementById('rightCaster')
const analyst = document.getElementById('analyst')

var swapTog = !true;

function update() {
    const data = { leftCaster: leftCaster.value, rightCaster: rightCaster.value, analyst: analyst.value}
    nodecg.sendMessage('updateCasters', data)
}

function swap() {
    if (swapTog != true) {
        const data = { leftCaster: leftCaster.value, rightCaster: rightCaster.value, analyst: analyst.value }
        nodecg.sendMessage('swapCasters', data)
        swapTog = true;
    } else {
        update() //call the method THEN flip the switch off
        swapTog = false;
    }
}