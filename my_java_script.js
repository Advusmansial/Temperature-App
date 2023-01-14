let loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form from submitting

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // send a request to the server to check if the email and password are valid
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Login successful!");
      } else {
        alert("Incorrect email or password.");
      }
    });
});

