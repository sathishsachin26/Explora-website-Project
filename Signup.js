// function confirmbtn() {

//     let fullname = document.getElementById("fullname").value;
//     let email = document.getElementById("email");

//     let dob = document.getElementById("dob").value;
//     let phoneno = document.getElementById("phoneno").value;

//     let nationality = document.getElementById("nationality").value;

//     let gender = document.getElementById("gender").value;

//     let password = document.getElementById("password").value;
//     let confirmpassword = document.getElementById("confirmpassword").value;

// }


// if (fullname === "" || fullname === null) {
//     alert("Enter your fullname");

// }
// else if (email === "" || email === null) {
//     alert("Enter your correct E-mail id");
// }
// else if (dob === "" || dob === null) {
//     alert("Enter your dob");
// }
// else if (phoneno === "0-9") {
//     alert("Successfully entered phone number");
// }
// else if (nationality === "india") {
//     alert("Correct");
// }

// else if (gender === "male,female,others") {

// }
// else if (password === a - z, 0 - 9, A - Z, "#", "@", "_") {
//     alert("Password accepted")
// }
// else {
//     alert("Enter your correct password again!")
// }



// function confirmbtn() {

//     const fullname = document.getElementById("fullname").value;
//     const email = document.getElementById("email").value;
//     const dob = document.getElementById("dob").value;
//     const phoneno = document.getElementById("phoneno").value;
//     const nationality = document.getElementById("nationality").value;
//     const gender = document.getElementById("gender").value;
//     const password = document.getElementById("password").value;
//     const confirmpassword = document.getElementById("confirmpassword").value;


//     if (!fullname || !email || !dob || !phoneno || !nationality || !gender || !password || !confirmpassword) {
//         alert("Please fill out all fields.");
//         return;
//     }


//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email.");
//         return;
//     }


//     if (password !== confirmpassword) {
//         alert("Passwords do not match.");
//         return;
//     }


//     alert("Form submitted successfully!");
// }




  function confirmbtn() {

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const phoneno = document.getElementById("phoneno").value;
    const nationality = document.getElementById("nationality").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;


    if (fullname === "" || email === "" || dob === "" || phoneno === "" || nationality === "" || gender === "" || password === "" || confirmpassword === "") {
      alert("Please fill in all required fields.");
      return;
    }

      if (password !== confirmpassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

     alert("Signup successful! Welcome, " + fullname);

     }

  document.querySelector('.reset').addEventListener('click', function () {
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("phoneno").value = "";
    document.getElementById("nationality").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmpassword").value = "";
  });







