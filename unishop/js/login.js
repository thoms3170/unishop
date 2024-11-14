document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert('Login successful!');
        // Redirect to home page or another page
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password');
    }
});
