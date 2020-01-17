function login(){
    var Email = document.getElementById('email').value;
    var Password = document.getElementById('password').value;
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (pattern.test(Email)) {
        alert("login succesfull");
    }
    else {
        alert("invalid Email Id please try again");
    }

}