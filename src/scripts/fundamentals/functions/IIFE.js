// IIFE = Immediately Invoked Function Expression
export function run(){
    let app = (function(){
        let carId = 123;
        console.log('in function');
        return { id = carId };
    })();
}