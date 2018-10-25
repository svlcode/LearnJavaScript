export function run(){
    mixedValues();
    pushPop();
    removeFirstElement();
    splice();
    restParameters();
}

// arrays in js support mixed values, although this is not a best practice.
function mixedValues(){
    let values = [1, "aaa", true, 4.6];

    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
    console.log(values[3]);
}

// add and remove items
function pushPop(){
    let values = [];

    values.push(21);
    values.push(-12);
    values.push(42);

    console.log(values);

    let removedElement = values.pop();

    console.log(`element ${removedElement} was removed.`);
    console.log(values);
}

//remove first element from an array
function removeFirstElement(){
    let values = [1, 2, 3];

    let removedElement = values.shift();

    console.log(`element ${removedElement} was removed.`);
    console.log(values);
}

// remove number of elements from an array
function splice(){
    let values = [1, 2, 3, 4, 5];

    let removedElements = values.splice(2, 2);

    console.log(`elements ${removedElements} were removed.`);
    console.log(values);
}

// rest parameters are similar to params [] in C#
// the rest paramter should always be listed last.
function restParameters(){
    // ...colors is a rest paramter (but is actually an array)
    
    function showColors(isMetalic,...colors){ 
        if(isMetalic){
            console.log('the following colors are metalic:')
        }
        colors.forEach(c => console.log(c));
    }

    showColors(true, 'red', 'yellow', 'blue');

    showColors(false, 'red', 'green' , 'yellow', 'blue');
}
