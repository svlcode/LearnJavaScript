
export function run(){
    equalityOperators();
    logicalOperators();
}

function equalityOperators(){
    doubleEquals();
    tripleEquals();

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
}

function logicalOperators(){
    console.log('logical operators...');
    truthy();
    falsy();
    nullCheck();

    function nullCheck() {
        let car = null;
        if (!car) {
            car = { mark: 'Toyota' };
        }

        console.log(car);
    }

    function falsy() {
        console.log('falsy...');

        let var1 = undefined;
        let var2 = 0;
        let var3 = 3;

        console.log(`var1 = undefined`);
        console.log(`var2 = 0`);
        console.log(`var3 = 3`);
        console.log(`result = var1 || var2 || var3`);

        let result = var1 || var2 || var3;
        console.log(`result = ${result}`);

        let userSettings = null;
        let defaultSettings = { name : 'Default' };

        console.log(userSettings || defaultSettings);
    }
    
    function truthy() {
        console.log('truthy...');
        let var1 = 2;
        let var2 = 3;
        // result will be var2 if both objects are truthy.
        let result = var1 && var2;
        console.log(`result = var1 && var2 = ${var1} && ${var2} = ${result}`);
    }
} 

