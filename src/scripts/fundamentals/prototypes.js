// prototypes are used to expand objects (similar to extension methods in C#).
export function run(){
    function Car(id){
        this.carId = id;
    }

    // a prototype exists directly on Car as a function
    // this means that it will only be one function and it will not 
    // be reacreated for every instance of the Car object,
    // which will save a lot of memory when multiple objects are created.
    Car.prototype.start = function(){
        console.log('starting ' + this.carId);
    }

    let car = new Car(123);
    car.start();

    String.prototype.sayHello = function(){
        return 'Hello ' + this.toString();
    }

    console.log('Vio'.sayHello());

}