const inputListener = document.querySelector("input#name-input");
const outputValue = document.querySelector("span#name-output");

inputListener.addEventListener('input', e => {
    inputListener.value ? outputValue.textContent = e.target.value : outputValue.textContent = "незнакомец";
   

})