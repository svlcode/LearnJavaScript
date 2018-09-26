export function mixedValues(){
    let values = [1, "aaa", true, 4.6];

    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
    console.log(values[3]);
}

// add and remove items
export function pushPop(){
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
export function removeFirstElement(){
    let values = [1, 2, 3];

    let removedElement = values.shift();

    console.log(`element ${removedElement} was removed.`);
    console.log(values);
}

// remove number of elements from an array
export function splice(){
    let values = [1, 2, 3, 4, 5];

    let removedElements = values.splice(2, 2);

    console.log(`elements ${removedElements} were removed.`);
    console.log(values);
}