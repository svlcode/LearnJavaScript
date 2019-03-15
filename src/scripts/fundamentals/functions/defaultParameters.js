export function run(){

    let startCar = function(carName, fuelType = 'gas'){
        console.log(`${carName} runs on ${fuelType}`);
    }

    startCar('toyota yaris');

    startCar('volkswagen golf', 'diesel');
}