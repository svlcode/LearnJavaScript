export function run(){
    let promise = new Promise(
        function(resolve, reject){
            setTimeout(resolve, 3000, 'some value');
        }
    )
    
    promise.then(
        value => console.log('this is: ' + value),
        error => console.log('this is an error: ' + error)
    )
    console.log(promise);
}