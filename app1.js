const logingButton = document.getElementById('login-submit');

logingButton.addEventListener('click' , function(){
    const userEmail = document.getElementById('user-email').value
    const userPassword = document.getElementById('user-password').value
    if (userEmail == 'khokan@gmail.com' && userPassword == 'Khokan' ){
        window.location.href = 'index1.html'
    }
    else{
        // alert = 'your entered email or password is not correct'
        const error = document.getElementById('error');
        error.style.display = 'block' ; 
    }
    
})