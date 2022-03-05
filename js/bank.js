document.getElementById('submit-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    if (userEmail.value == 'a@b.c' && userPassword.value == 'p') {
        window.location.href = "banking.html";

    }
    else {
        alert('Invalid User');
    }
})
