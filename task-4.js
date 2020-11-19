const decrementEventListener = document.querySelector(".fdi");
const incrementEventListener = document.querySelector(".fdy");
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