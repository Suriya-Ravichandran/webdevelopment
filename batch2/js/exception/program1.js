try {
    aaalert("Welcome to livewire"); // This will throw a ReferenceError
} catch (err) {
    console.log("Caught an error:", err.message);
    throw "this error created by me"; // Re-throwing the error
} finally {
    console.log("CODE EXECUTED");
}
