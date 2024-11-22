// Login

function boxlogin() {
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    if (email === "" || email === null) {
        alert("Please enter the email");
    }
    else if (pwd === "" || pwd === null) {
        alert("Please enter the correct password");
    }
    else if (email === "sathish@gmail.com" && pwd === "1234") {
        alert("Login successfully!")
    }
    else {

    }

    
}

