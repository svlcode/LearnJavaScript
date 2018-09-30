export function run(){
    
    // declare with var keyword
    function startVar(){
        for(var i = 0; i < 5; i++)
            console.log(i);
        
        // by declaring i using 'var', i will be accesbile outside the for block.
        console.log(i);
    }

    startVar();


    function startLet(){
        for(let i = 0; i < 5; i++)
            console.log(i);
        
        // this is not possible using let.
        //console.log(i);
    }

    startLet();
}