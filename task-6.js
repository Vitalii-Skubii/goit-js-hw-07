const refAmountSymbols = document.querySelector('#validation-input');


function resultLength(e) {
    e.target.value.length ===6? refAmountSymbols.classList.add('valid') : refAmountSymbols.classList.add('invalid');
    
}
function removeClass(e) {
    e.target.value.length ===6? refAmountSymbols.classList.remove('valid') : refAmountSymbols.classList.remove('invalid');
}
refAmountSymbols.addEventListener("blur", resultLength)
refAmountSymbols.addEventListener("focus", removeClass)
