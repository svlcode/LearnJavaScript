export function run(){
    mixedValues();
    pushPop();
    removeFirstElement();
    splice();
    restParameters();
    destructingArrays();
    iteratingThroughArrays();
}

function iteratingThroughArrays(){
    let cars = [
        { carId: 123, style: "sedan" },
        { carId: 456, style: "convertible" },
        { carId: 789, style: "sedan" }
    ];

    cars.forEach(car => console.log(car));
    
    console.log('\n');
    
    cars.forEach((car , index) => console.log(car, index));

    console.log('\n');

    console.log('Filter only sedans:')
    // filter works like Where in C#'s LINQ
    let sedans = cars.filter(car => car.style == 'sedan');
    console.log(sedans);

    // this checks all the records to fulfill this condition is the LINQ equivalent of All()
    let result = cars.every(car => car.carId > 0);

    console.log('all cars have an id greater than zero: ' + result);

    // returs the first element in the array where the predicate is true.
    let car = cars.find(c => c.carId > 300);

    console.log('first car which has an id greater than 300', car);
}

function destructingArrays(){
    console.log('begin destructing arrays...');
    let carIds = [1, 2, 3, 4];

    let [car1, car2, car3] = carIds;

    console.log('car3:' + car3);

    // asign the first element to car1 and
    // asign the rest of the elements to the remainingCars variable
    let remainingCars;
    [car1, ...remainingCars] = carIds;

    console.log(car1, remainingCars);


    // skip the first two elements and
    // asign the rest of the elements to the remainingArray variable
    let [,, ...remainingArray] = carIds;

    console.log(remainingArray);
    console.log('end destructing arrays...');
}

// arrays in js support mixed values, although this is not a best practice.
function mixedValues(){
    let values = [1, "aaa", true, 4.6];

    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
    console.log(values[3]);
}

// add and remove items
function pushPop(){
    let values = [];

    values.push(21);
    values.push(-12);
    values.push(42);

    console.log(values);

    let removedElement = values.pop();

    console.log(`element ${removedElement} was removed.`);
    console.log(values);
}

//remove first element from an array
function removeFirstElement(){
    let values = [1, 2, 3];

    let removedElement = values.shift();

    console.log(`element ${removedElement} was removed.`);
    console.log(values);
}

// remove number of elements from an array
function splice(){
    let values = [1, 2, 3, 4, 5];

    let removedElements = values.splice(2, 2);

    console.log(`elements ${removedElements} were removed.`);
    console.log(values);
}

// rest parameters are similar to params [] in C#
// the rest paramter should always be listed last.
function restParameters(){
    // ...colors is a rest paramter (but is actually an array)
    
    function showColors(isMetalic,...colors){ 
        if(isMetalic){
            console.log('the following colors are metalic:')
        }
        colors.forEach(c => console.log(c));
    }

    showColors(true, 'red', 'yellow', 'blue');

    showColors(false, 'red', 'green' , 'yellow', 'blue');
}
