function displaymsg(event) {
    event.preventDefault();  // Prevents default form behavior (optional here)

    let msg = event.target.value;  // Get the value of the input field
    console.log(msg);              // Log the value to the console

    // Update the paragraph with the input value
    document.getElementById('msg').textContent = msg;
}

// Attach the event listener to the input element
document.getElementById('myInput').addEventListener('input', displaymsg);
