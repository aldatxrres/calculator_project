const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');
const display = document.querySelector('.calculator_display');
const key = e.target;
const action = key.dataset.action;
const keyContent = key.textContent;
const displayedNum = display.textContent;

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    const key = e.target;
    //?

    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
 }
});

if (!action) {
    if(displayedNum === '0'){
        display.textContent = keyContent;
    } else {
        display.textContent = displayedNum + keyContent;
    }

} else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
    key.classList.add('is-depressed');
} else if (action === 'decimal'){
    display.textContent = displayedNum + '.';
} else if(action === 'clear'){
    //console.log('clear key')
} else if(action === 'calculate'){
    //console.log('equal key')
}

