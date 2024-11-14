document.addEventListener('DOMContentLoaded', function() {
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    const adminPassword = 'thoms3170'; // Set your admin password here

    const adminLoginForm = document.getElementById('admin-login-form');
    const feedbackListDiv = document.getElementById('feedback-list');

    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const enteredPassword = document.getElementById('admin-password').value;

        if (enteredPassword === adminPassword) {
            adminLoginForm.classList.add('hidden');
            feedbackListDiv.classList.remove('hidden');

            feedbackList.forEach(feedback => {
                const feedbackItem = document.createElement('div');
                feedbackItem.classList.add('feedback-item');

                feedbackItem.innerHTML = `
                    <p><strong>Name:</strong> ${feedback.name}</p>
                    <p><strong>Email:</strong> ${feedback.email}</p>
                    <p><strong>Comments:</strong> ${feedback.comments}</p>
                    <p><small><strong>Date:</strong> ${new Date(feedback.date).toLocaleString()}</small></p>
                `;

                feedbackListDiv.appendChild(feedbackItem);
            });
        } else {
            alert('Incorrect password. Please try again.');
        }
    });

    document.getElementById('feedback-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comments = document.getElementById('comments').value;

        const feedback = {
            name,
            email,
            comments,
            date: new Date().toISOString()
        };

        feedbackList.push(feedback);
        localStorage.setItem('feedbackList', JSON.stringify(feedbackList));

        alert('Thank you for your feedback!');
        document.getElementById('feedback-form').reset();
    });
});
