export function run(){
    // ...rest is a rest parameter. this aggregates the remaining parameters into an array
    function startCars(car1, car2, car3, ...rest){
        console.log(car1, car2, car3, rest);
    }

    let carIds = [100, 200, 300, 400, 500, 600];
    // ...carIds is the spread syntax which splits an array into values;
    startCars(...carIds);
}