while (true){

//operand 1 input
const fNumber=parseFloat(prompt('Enter the first number: '));

//operator input
const operator=prompt('Enter operator (either + , - , * or / ): ');

//operand 2 input
const sNumber=parseFloat(prompt('Enter the second number: '));


//calculations
let result;

if(operator=='+'){
    result= fNumber + sNumber;
    displayResult();
    break;
}
else if(operator=='-'){
    result=fNumber-sNumber;
    displayResult();
    break;
}
else if(operator=='*'){
    result=fNumber*sNumber;
    displayResult();
    break;
}
else if(operator=='/'){
    result=fNumber/sNumber
    displayResult();
    break;
    

}else{
    alert('You have not typed a valid operator, please run the program again.');

}

// display the result
function displayResult(){
    alert(`${fNumber} ${operator} ${sNumber} = ${result} \nRefresh page to calculate again` );
    console.log(`${fNumber} ${operator} ${sNumber} = ${result}`);

}
}