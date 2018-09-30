// when dealing with an object 'this' references the object that is curently used.

// when dealing with a regular function 'this' references the global object
// function -> global (window, global)

export function Run(){
        
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
        // if this is function is called with new, 'this' will reference a new empty object.
        console.log(this.caption); 
    }

    const antoherObject = new Creator('Yellow');
    antoherObject.color = ' Green';

     console.log(antoherObject);

    
}