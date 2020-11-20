const decrementEventListener = document.querySelector('button[data-action="decrement"]');
const incrementEventListener = document.querySelector('button[data-action="increment"]');
const addValue = document.querySelector('#value')

let counterValue = 0;


decrementEventListener.addEventListener('click', () => {
    counterValue--;
    
    return addValue.textContent = counterValue;
})

incrementEventListener.addEventListener('click', () => {
    counterValue++;
    
    return addValue.textContent = counterValue;
})