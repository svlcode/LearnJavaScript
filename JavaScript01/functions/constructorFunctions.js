export function run() {
    // Constructor Functions
    // the naming convention for Constructor Functions is to use PascalNotation 
    // (that is that they should begin with a Capital Letter.)

    function Circle(radius) {
        this.radius = radius;
        this.draw = function(){
            console.log(`drawing a circle with a radius of ${this.radius}...`);
        }
    }

    // the following three actions are happening in this situation:
    // 1. first, the 'new' keyword creates a new empty object like
    // const x = {};
    // 2. then, the empty objected created is assigned to the 'this' keyword inside that function.
    // 3. finally, the 'new' keyword return the object created.
    const circle = new Circle(1);
    circle.draw();
}