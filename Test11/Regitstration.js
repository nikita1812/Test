var Admin = {
    Ad_Name: 'user',
    Ad_Email: 'user@gmail.com',
    Ad_Password: 'user123'
}
function check() {
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Password = document.getElementById('password').value;
    var ConfirmPassword = document.getElementById('confirmPassword').value;
    var City = document.getElementById('city').value;
    var State = document.getElementById('state').value;
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (Admin.Ad_Name === Name && Admin.Ad_Email === Email && Admin.Ad_Password === Password) {
        return true;
    }
    else {
        alert("Only Admin Registration");
    }
    if (Name === "" || Name === null) {
        alert("Name is mandatory");
        return false;
    }
    else if (pattern.test != (Email)) {
        return false;
    }
    else if (Password === "" || Password === null) {
        alert("Password is mandatory");
        return false;
    }
    else if (ConfirmPassword === "" || ConfirmPassword === null) {
        alert("Confirm password is mandatory");
        return false;
    }
    else if (Password != ConfirmPassword) {
        return false;
    }
    else if (City == "" || City == null) {
        alert("Select City");
    }
    else if (State == "" || State == null) {
        alert("Select City");
    }
    else if (!(document.getElementById('checked').value).checked) {
        return false;
    }
    else {
        return true;
    }
}
