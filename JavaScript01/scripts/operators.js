export function run(){
    equalityOperators();
}

function equalityOperators(){
    doubleEquals();
    tripleEquals();
}

function doubleEquals(){
    let number = 4;
    let stringValue = '4';

    console.log(`4 == '4'`);
    // here number will be converted to a string then compared with stringValue.
    if(number == stringValue)
    {
        console.log('number is equal to stringValue due to implicit type conversion.');
    }
}

function tripleEquals(){
    let number = 4;
    let stringValue = '4';
    console.log(`4 !== '4'`);
    // here the types of the variables have to be equal as well as the values.
    if(number !== stringValue)
    {
        console.log('number is NOT equal to stringValue because there is no implicit type conversion for this operator.');
    }
}