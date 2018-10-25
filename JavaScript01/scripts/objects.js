export function run(){
    creatingObjects();
    extendingObjects();
    iterateOverProperties();
    privatePropertiesAndMethods();
    gettersAndSetters();
}


function gettersAndSetters(){
    function Circle(radius){
        this.radius = radius;
        let color = 'red';

        Object.defineProperty(this, 'area',{
            get: function(){
                return Math.PI * Math.pow(this.radius, 2);
            }
        });

        Object.defineProperty(this, 'color',{
            get: function(){
                return color;
            },
            set: function(value){
                if(value === ''){
                    value = 'white';
                }
                color = value;
            }
        });
    }

    let circle = new Circle(3);
    console.log(circle.area);

    circle.color = 'green';
    console.log(circle.color);

    circle.color = '';
    console.log(circle.color);
}

function privatePropertiesAndMethods(){
    function Circle(radius){
        this.radius = radius;
        let color = 'red';
        this.draw = function(){
            console.log('drawing a circle of an area of ' + area() + ' in ' + color);
        }
        // By convention, we make a private that variable. 
        // This is used to make the object available to the private methods. 
        // This is a workaround for an error in the ECMAScript Language Specification which causes this to be set incorrectly for inner functions.
        let that = this;
        let area = function(){
            return Math.PI * Math.pow(that.radius, 2);
        }
    }

    let circle = new Circle(3);
    circle.draw()
}

function iterateOverProperties(){
    function Circle(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('drawing');
        }
        this.area = function(){
            return Math.PI * Math.pow(this.radius, 2);
        }
    }

    const circle1 = new Circle(2);

    for (const key in circle1) {
        if (circle1.hasOwnProperty(key)) {
            const value = circle1[key];
            console.log(`${key}: ${value}`);
        }
    }

    circle1.radius = 3;
    console.log(circle1.area());

    const keys = Object.keys(circle1);
    console.log(keys);

}

// objects in JS can be extended or trimmed dinamically...
function extendingObjects() {
    // this is an object literal. 
    // this is one way to define a function
    const video = {
        title: 'my video title',
        // a function inside an object is called a method.
        play(){
            console.log(`playing '${this.title}' from extending objects.`);
        }
    }

    video.play();

    // adding a new method to an object.
    // extending the object with another method...
    video.stop = function(){
        console.log('video stopped.');
    }

    video.stop();

    // deletes a property or a method
    delete video.stop;

    video.location = { x: 1 };

    // this is another way to define a property
    const propertyName = 'frame rate';
    video[propertyName] = { x: 2 };

    delete video[propertyName];

    
}

// there are multiple ways to create an object
function creatingObjects(){
    // this is an object literal. 
    const video = {
        title: 'video1',
        // a function inside an object is called a method.
        play(){
            console.log(`playing '${this.title}' from object literal`);
        },
        // this is another way to define a method.
        stop: function(){
            console.log('stopping the video...');
        }
    }
    video.stop();

    // this is a factory function.
    function createObj(title){
        return {
            title,
            play() {
                console.log(`playing '${this.title}' from a factory function`);
            }
        }
    }

    const video1 =  createObj('video2');
    video1.play();

    // this is a constructor function
    function Video(title){
        this.title = title;
        this.play = function(){
            console.log(`playing '${this.title}' from a constructor function`);
        }
    }

    const video2 = new Video('video3');
    video2.play();
}