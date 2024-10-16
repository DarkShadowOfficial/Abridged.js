function For(action, start = 0, end, step = 1) {
    for (let i = start; i < end; i += step) {
        action(i);
    }
}
function Iter(action, object) {
    if (TYPE(object) == "object") {
        for (let i of Object.getOwnPropertyNames(object)) {
            action(i);
        }
    } else if (TYPE(object) == "array") {
        object.forEach(x => {
            action(x);
        })
    }
}
function While(action, statement) {
    do {action();} while (statement);
}
function If(statement, action) {
    if (statement) {
        action();
    }
}
function IfElse(statement, action, alt_action) {
    if (statement) {
        action();
    } else {
        alt_action();
    }
}
function IfChain(statements, actions, alt_action) {
    for (let i = 0; i < statements.length; i++) {
        if (statements[i]) {
            actions[i]();
            return;
        }
    }
    alt_action();
}
const Log = console.log;
const XOR = (a, b) => (a || b) && !(a && b);
const OR = (a, b) => a || b;
const AND = (a, b) => a && b;
const NOT = a => !a;
const NOR = (a, b)  => !OR(a, b);
const TYPE = a => a.push ? "array" : typeof a;
Iter(i => {globalThis[i] = Math[i]}, Math)
const $ = a => document.querySelector(a);
const $$ = a => document.querySelectorAll(a);
function objectsAreEqual(a, b) {
    let ds = 0;
    for (let i of Object.getOwnPropertyNames(a)) {
        if (a[i] != b[i]) {
            ds++;
        }
    }
    for (let i of Object.getOwnPropertyNames(b)) {
        if (a[i] != b[i]) {
            ds++;
        }
    }
    return NOT(ds > 0);
}
