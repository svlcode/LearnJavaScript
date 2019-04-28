
// In JS, functions are objects.
export function run(){
    
    functionStatements();

    functionExpressions();
    
    passingFunctionArguments();

    arrowFunctions();

    defaultParameters();

    composingDynamicFunctions();
}

String.prototype.format = function() {
    let myString = this;
    for (let arg in arguments) {
      myString = myString.replace(new RegExp("\\{" + arg + "\\}", 'g'), arguments[arg]);
    }
    return myString;
  }

function composingDynamicFunctions() {
    
    let saying = 'hello';
    let param = 'name';

    const sayHelloFunc = new Function(param, `console.log('${saying} ' + ${param});`);

    sayHelloFunc('vio');
}

function passingFunctionArguments() {
     // passing a function as an argument to another function.

     function execute(func){
        func();
    }

    execute(() => { console.log('this is a function passed as an argument to another function.')});
}

// statements do not produce an immediate value.
function functionStatements() {
    // this is function statement
    // name is called a parameter here
    function sayHello(name){
        console.log(`hello ${name}`);
    }

    // vio is called an argument here
    sayHello('vio');
    
    function calculateSum(a, b){
        return a+b;
    }

    let result = calculateSum(2,4);

    console.log(result);
}


// expressions produce a value
function functionExpressions() {
    // this is a function expression which    
    // sets a variable to point to a function
    let action = function (){
        console.log('performing an action');
    }

    action()
}

function defaultParameters(){

    let trackCar = function(carId, city = 'NY'){
        console.log(`tracking car ${carId} in ${city}`);
    }

    trackCar('toyota');

    trackCar('ford', 'Chicago');
}

 // arrow functions
// do not have their own "this" value.
// "this" refers to the enclosing context.
let arrowFunctions = () => {
    // arrow function without parameter
    // the return statement is optional here because this is the single line in the function
    // when there are no parameters or multiple parameters we need the opening and closing paranthesis
    let getId = () => 123;

    console.log(getId());

    // when there is only one parameter the opening and closing paranthesis are not needed
    let getPrefix = prefix => prefix + 124;

    // convention for using parameter or not with "underscore"

    let getValue = _ => 256;

    console.log(getValue());

    console.log(getPrefix('ID: '));

    let getPrefixSuffix = (pref, suff) => pref + 125 + suff;

    console.log(getPrefixSuffix('ID: ', ' !!!'))

    // the return statement is NOT optional here because this function has multiple lines of code
    let calculate = (number1, number2) => {
        let temp = number1;
        number1 = number2;
        number2 = temp;
        return number2 + number1;
    };

    console.log(calculate(4,6));
}