export function run(){

    basicClasses();

    inheritance();
}

function inheritance(){
    class Vehicle {
        constructor(){
            this.type = 'vehicle'
        }

        start(){
            return `Starting ${this.type}`;
        }
    }

    class Car extends Vehicle {
        
        constructor() {
            super();
            this.type = 'car';
        }

        // polymorfism
        start() {
            return 'Hey! I am ' + super.start();
        }
    }

    let car = new Car();
    console.log(car.start());

}



function basicClasses(){
    class Car{
        // this is the constructor of the class
        constructor(id){
            this.id = id;
        }
        start(){
            return `CarId: ${this.id}`;
        }
    }

    let car = new Car(3);
    car.id += 2;

    console.log(car.id);

    console.log(car.start());
}