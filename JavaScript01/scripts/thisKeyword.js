// when dealing with an object 'this' references the object that is curently used.

// when dealing with a regular function 'this' references the global object
// function -> global (window, global)
// this usually represents the context object in which the function was defined.

export function run(){
        
    console.log(this);

    const myObject = {
        title: 'my title',
        tags: ['a', 'b', 'c'],
        show() {
            console.log(this);
        },

        showTags() {
            this.tags.forEach(function(tag){
                console.log(this.title, tag);
            },this);
        }
    }

    myObject.show();
    myObject.showTags();

    

    function Creator(title){
        this.caption = title;
        // if this function is called with new, 'this' will reference a new empty object.
        console.log(this.caption); 
    }

    const antoherObject = new Creator('Yellow');
    antoherObject.color = ' Green';

     console.log(antoherObject);

    // change the context of 'this'
    let car = {
        carId: 123,
        getId: function(){
            return this.carId;
        }
    }


    let newCar = { carId: 456 };
    // using call, the context of the method can be changed. here the 'newCar' becomes the context of the method getId
    console.log(car.getId.call(newCar));

    let obj = {
        objId: 555,
        getId: function(prefix){
            return prefix + this.objId;
        }
    }

    let newObj = {
        objId: 222
    };
    
    // apply acts like call, except that apply accepts an array of arguments
    console.log(obj.getId.apply(newObj, ['ID: ']));

    // make a copy of a function and change its context by using bind
    
    let bike = {
        color: 'black',
        getColor: function(){
            return this.color;
        }
    }

    let newBike = {
         color: 'yellow'
    }

    let newFunction = bike.getColor.bind(newBike);
    console.log(newFunction());
    newBike.test = newFunction;
    console.log(newBike.test());
    
}