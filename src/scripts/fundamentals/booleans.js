export function Falsy(){
    let value1 = false;
    let value2 = "0";
    let result = value1 == value2;
    console.log(`${value1} == ${value2} evaluates to ${result}`);
    
    value2 = ' ';
    result = value1 == value2;
    console.log(`${value1} == ${value2} evaluates to ${result}`);


    value2 = 0;
    result = value1 == value2;
    console.log(`${value1} == ${value2} evaluates to ${result}`);
}

// a variable is truthy if is not null or undefined or 0.
export function Truthy(){
    let value1 = true;
    let value2 = "1";
    let result = value1 == value2;
    console.log(`${value1} == ${value2} evaluates to ${result}`);
    
    value2 = 0.5;
    result = value1 == value2;
    console.log(`${value1} == ${value2} evaluates to ${result}`);

    let userSettings = null;
    let defaultSettins = { name: "default", value:  5 };

    let mySettings = userSettings || defaultSettins;
    console.log(mySettings);
}