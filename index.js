const passwordSlider =document.getElementById('password-slider');
const passwordNumber =document.getElementById('password-number');
const includeUppercase =document.getElementById('includeUppercase');
const includeSymbol=document.getElementById('includeSymbol');
const includeNumber =document.getElementById('includeNumber');
const form =document.getElementById('form');
const passwordDisplay = document.getElementById('password-display')


const UPPERCASE_CHAR_CODE=arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODE=arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODE=arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODE=arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64))
.concat(arrayFromLowToHigh(91, 96))
.concat(arrayFromLowToHigh(123, 126));

passwordSlider.addEventListener('input',getPasswordValue);
passwordNumber.addEventListener('input',getPasswordValue);

form.addEventListener('submit', event=>{
    event.preventDefault();
    const characterAmount =passwordNumber.value;
    const uppercase =includeUppercase.checked;
    const symbol =includeSymbol.checked;
    const number =includeNumber.checked;
    const password =generatePassword(characterAmount,uppercase,symbol,number);
    passwordDisplay.innerText =password;
    
} )

function generatePassword(characterAmount,uppercase,symbol,number){
    let charCodes =LOWERCASE_CHAR_CODE;
    if(uppercase) charCodes =charCodes.concat(UPPERCASE_CHAR_CODE);
    if(symbol) charCodes =charCodes.concat(SYMBOL_CHAR_CODE);
    if(number) charCodes =charCodes.concat(NUMBER_CHAR_CODE);

    const passwordCharacters =[];
    
    for(let i=0; i<characterAmount; i++){

        const character =charCodes[Math.floor(Math.random() * charCodes.length)];
        
         passwordCharacters.push(String.fromCharCode(character));
        
    }
    return passwordCharacters.join('');
}


function arrayFromLowToHigh(low,high){
    const array =[];
    for(let i=low; i<=high; i++){
        array.push(i)
    }
    return array;
}

function getPasswordValue(event){
    const value= event.target.value;
    passwordSlider.value= value;
    passwordNumber.value= value;
}