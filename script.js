document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (replace with real backend validation later)
    if (username === "arafat" && password === "721484") {
        document.getElementById("message").textContent = "Login successful!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Invalid username or password.";
    }
});