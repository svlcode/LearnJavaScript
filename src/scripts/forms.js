let form = document.getElementById('myForm');
form.addEventListener('submit', event => {
    let username = form.elements['username'];
    let password = form.elements['password'];

    if (username.value === '') {
        let userError = document.getElementById('username-error');
        userError.textContent = 'Fill in the username';
        userError.style.color = 'red';
        username.style.borderColor = 'red';
        username.focus();

         // prevent browser for submiting the form
        event.preventDefault();
    }
   
});