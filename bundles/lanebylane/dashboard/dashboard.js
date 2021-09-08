const p1Rep = nodecg.Replicant('P1', { defaultValue: 0 });
const p2Rep = nodecg.Replicant('P2', { defaultValue: 0 });
const p3Rep = nodecg.Replicant('P3', { defaultValue: 0 });
const p4Rep = nodecg.Replicant('P4', { defaultValue: 0 });

function addP1() {
    p1Rep.value++;
}

function subtractP1() {
    p1Rep.value--;
}

function addP2() {
    p2Rep.value++;
}

function subtractP2() {
    p2Rep.value--;
}

function addP3() {
    p3Rep.value++;
}

function subtractP3() {
    p3Rep.value--;
}

function addP4() {
    p4Rep.value++;
}

function subtractP4() {
    p4Rep.value--;
}