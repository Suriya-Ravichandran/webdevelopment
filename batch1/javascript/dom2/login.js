// This function will be triggered when the form is submitted
function login(event){
    // Prevent the default form submission
    event.preventDefault();

    // Get the email and password values from the form
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Define correct credentials
    let username = "foo@gmail.com";
    let verifypassword = "1234";

    // Check if the username and password match the correct ones
    if (username == email) {
        if (verifypassword == password) {
            alert("Login Success");
            // Redirect to the calculator page
            window.location.href = "calculator.html"; // Replace with your actual next page URL
        } else {
             document.getElementById("error").innerHTML="Login failed incorrect password"
            alert("Login failed: Incorrect password");
        }
    } else {
         document.getElementById("error").innerHTML="User Not Found"
        alert("User not found");
    }
}

// Add event listener to the form to run the login function on submit
document.getElementById("loginForm").addEventListener("submit", login);
