export function run(){

    //rest paramters is a modern feature of JS which allows a function to store multiple arguments into an array.
    function sendCars(dayOfWeek, number, ...allCarIds){
        console.log('today is ' + dayOfWeek);
        console.log('my number is ' + number);
        console.log('handling the rest parameter...');
        allCarIds.forEach(id => console.log(id));
    }

    sendCars('monday', 2, 1, 3, 5);
}