window.document.getElementById('call-mockApi').addEventListener('click', function(){
    ajaxCall("http://5cb19b048bdfe80014e981dd.mockapi.io/myapi/v1/users");
});

window.document.getElementById('file-content').addEventListener('click', function(){
    ajaxCall("ajax_info.txt");
});

// XMLHttpRequest (XHR)
function ajaxCall(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // sets the html of an element with the retrieved response
            document.getElementById('placeholder').innerHTML = this.responseText;
        }
    };
    // ajax_info.txt can be replaced with an url
    xhttp.open("GET", url, true);
    xhttp.send();
}