export function run(){
    createJSON();
    parseJSON();
}

function parseJSON(){
    let jsonIn = `
        [
            { "carId": 123, "style" : "convertible" },
            { "carId": 456, "style" : "cabrio" },
            { "carId": 789, "style" : "roadster" }
        ]
    `;

    let carObjs = JSON.parse(jsonIn);

    console.log(carObjs);

}

function createJSON(){
    let car = {
        carId: 123,
        style: 'convertible',
        start: function(){
            console.log(`starting car ${this.carId}`);
        }
    }
    car.start();

    let string = JSON.stringify(car);
    console.log(string);
}
