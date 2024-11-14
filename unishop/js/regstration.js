document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create user object
    const user = {
        username,
        email,
        password
    };

    // Save user object in local storage
    localStorage.setItem(email, JSON.stringify(user));

    alert('Registration successful!');
});
