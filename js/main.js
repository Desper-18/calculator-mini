function insert(num) {
    document.form.operationView.value = document.form.operationView.value + num;
}

function clearAll() {
    document.form.operationView.value = '';
}

function backspace() {
    var exp = document.form.operationView.value;
    document.form.operationView.value = exp.substring(0, exp.length - 1);
}

function solve() {
    var exp = document.form.operationView.value;
    if (exp) {
        document.form.operationView.value = parseFloat(eval(exp));
        if (document.form.operationView.value.includes('.')) {
            parseFloat(eval(exp)).toFixed(2);
        }
        parseFloat(eval(exp));
    }
    switch (exp) {
        case 0.1 + 0.2:
            return 0.3;
    }
}

const calcInput = document.getElementById('operationInput');

calcInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        // console.log('Enter pressed');
        document.getElementById('solve').click();
    }
});
