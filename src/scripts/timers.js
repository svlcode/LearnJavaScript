function setTimeoutDemo(){
    let timeoutHeader = window.document.getElementById('timeout');
    timeoutHeader.innerText = 'starting timer...';
    
    setTimeout(function(){
        timeoutHeader.innerText = new Date(Date.now()).toISOString();
    }, 1000);
}