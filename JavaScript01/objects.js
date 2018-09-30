export function run(){
    creatingObjects();
    extendingObjects();
}

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
}

function creatingObjects(){
    // this is an object literal. 
    // this is one way to define a function
    const video = {
        title: 'video1',
        // a function inside an object is called a method.
        play(){
            console.log(`playing '${this.title}' from object literal`);
        }
    }

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

    function Video(title){
        this.title = title;
        this.play = function(){
            console.log(`playing '${this.title}' from a constructor function`);
        }
    }

    const video2 = new Video('video3');
    video2.play();
}