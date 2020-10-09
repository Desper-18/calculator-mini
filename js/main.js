function insert(num) {
    document.form.operationView.value = document.form.operationView.value + num;
}

function clearAll() {
    document.form.operationView.value = '';
}

function backspace() {
    var exp = document.form.operationView.value;
    document.form.operationView.value = exp.substring(0, exp.length-1);
}

function solve() {
    var exp = document.form.operationView.value;
    if (exp) {
        document.form.operationView.value = eval(exp);
    }
}