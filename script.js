function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    // Check the credentials (you can replace this with your authentication logic)
    if (username === "ragavendranj329@gmail.com" && password === "Ragav@111") {
        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "green";
    } else {
        loginMessage.textContent = "Invalid username or password. Please try again.";
        loginMessage.style.color = "red";
    }
}
