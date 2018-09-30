
// In JS, functions are objects.
export function run(){
    
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

    // setting a variable to point to a function
    let action = function (){
        console.log('performing an action');
    }

    action()

    // passing a function as an argument to another function.

    function execute(func){
        func();
    }

    execute(action);

    const sayHelloFunc = new Function('name',`
    console.log('hello ' + name);
    `);

    sayHelloFunc('vio');
}