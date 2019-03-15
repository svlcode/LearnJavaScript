export function run(){
    // Factory Function
    function createCircle(radius) {
        return {
            // if the key and value is the same, the key can be removed
            radius, // this is equivalent to radius: radius
            draw() { // this is a shorthand equivalent to draw: function() {
                console.log(`drawing a circle with a radius of ${this.radius}...`);
            }
        };
    }

    const circle1 = createCircle(1);
    circle1.draw();

    const circle2 = createCircle(2);
    circle2.draw();
}