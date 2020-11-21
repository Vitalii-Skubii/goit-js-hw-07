


 const refInputFontsize = document.querySelector('input#font-size-control');
 const refSpanText = document.querySelector('span#text');


refInputFontsize.addEventListener('input', () => {
    refSpanText.style.fontSize=`${refInputFontsize.valueAsNumber}px`
    
})
