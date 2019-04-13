export function run(){
    handleErrors();
    throwCustomErrors();

    function throwCustomErrors(){
        try {
            throw new Error('my custom errror');
        } 
        catch (error) {
            console.log('error: ', error)
        }
    }

    function handleErrors() {
        try {
            let car = newCar;
        }
        catch (error) {
            console.log('error: ', error);
        }
        finally {
            console.log('this always executes.');
        }
        console.log('continuing...');
    }
}