export function run(){

    // this is similar to params array in C#
    function showColors(...colors){ // colors is an array
        colors.forEach(c => console.log(c));
    }

    showColors('red', 'yellow', 'blue');

    showColors('red', 'green' , 'yellow', 'blue');
}