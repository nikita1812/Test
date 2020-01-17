var tempDate = Date();
var Ages = (document.getElementById("date").value) - tempDate;
function saveInStorage() {
    if (localStorage.getItem('Name') == null) {
        var Name = "temp";
    }
    else {
        var Name = localStorage.getItem('Name');
    }
    if (localStorage.getItem('Email') == null) {
        var Email = "temp";
    }
    else {
        var Email = localStorage.getItem('Email');
    }
    if (localStorage.getItem('Password') == null) {
        var Password = "temp";
    }
    else {
        var Password = localStorage.getItem('Password');
    }
    if (localStorage.getItem('Dates') == null) {
        var Date = "temp";
    }
    else {
        var Date = localStorage.getItem('Dates');
    }
    if (localStorage.getItem('Ages') == null) {
        var Date = "temp";
    }
    else {
        var Date = localStorage.getItem('Ages');
    }


    Name += "," + document.getElementById("name").value;
    Email += "," + document.getElementById("email").value;
    Password += "," + document.getElementById("password").value;
    Dates += "," + document.getElementById("date").value;
    Age += "," + Ages;

    localStorage.setItem("Name", Name);
    localStorage.setItem("Email", Email);
    localStorage.setItem("Password", Password);
    localStorage.setItem("Date", Dates);
}
function doTable() {
    if (localStorage.getItem('Name') != null && localStorage.getItem('Email') != null && localStorage.getItem('Password') != null && localStorage.getItem('Dates') != null) {
        let tempName = localStorage.getItem('Name').split(",");
        for (let index = 1; index < tempName.length; index++) {
            let tempColumn = document.createElement("tr");
            tempColumn.setAttribute("id", tempName[index]);
            document.getElementById("nam").appendChild(tempColumn);
            document.getElementById(tempName[index]).appendChild(document.createTextNode(tempName[index]));
        }
        let tempEmail = localStorage.getItem('Email').split(',');
        for (let index = 1; index < tempEmail.length; index++) {
            let tempColumn = document.createElement("tr");
            tempColumn.setAttribute('id', tempEmail[index]);
            document.getElementById('mail').appendChild(tempColumn);
            document.getElementById(tempEmail[index]).appendChild(document.createTextNode(tempEmail[index]));
        }
        let tempPassword = localStorage.getItem('Password').split(",");
        for (let index = 1; index < tempPassword.length; index++) {
            let tempColumn = document.createElement("tr");
            tempColumn.setAttribute("id", tempPassword[index]);
            document.getElementById("passwrd").appendChild(tempColumn);
            document.getElementById(tempPassword[index]).appendChild(document.createTextNode(tempPassword[index]));
        }
        let tempDate = localStorage.getItem('Dates').split(",");
        for (let index = 1; index < tempDate.length; index++) {
            let tempColumn = document.createElement("tr");
            tempColumn.setAttribute("id", tempDate[index]);
            document.getElementById("bdate").appendChild(tempColumn);
            document.getElementById(tempDate[index]).appendChild(document.createTextNode(tempDate[index]));
        }
        let tempAge = localStorage.getItem('Age').split(",");
        for (let index = 1; index < tempAge.length; index++) {
            let tempColumn = document.createElement("tr");
            tempColumn.setAttribute("id", tempAge[index]);
            document.getElementById("age").appendChild(tempColumn);
            document.getElementById(tempAge[index]).appendChild(document.createTextNode(tempAge[index]));
        }
    }
}
