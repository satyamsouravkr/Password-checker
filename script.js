// Check Password Strength and Update Colors
function checkStrength() {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('strength');
    const feedback = document.getElementById('password-feedback');
    const title = document.getElementById('title');
    const body = document.body;

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/\d/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    // Reset previous classes
    title.className = "";
    body.className = "";

    if (strength === 0) {
        strengthIndicator.textContent = 'Strength: Very Weak';
        feedback.textContent = 'Too weak!';
        title.classList.add("weak");
        body.classList.add("bg-weak");
    } else if (strength === 1) {
        strengthIndicator.textContent = 'Strength: Weak';
        feedback.textContent = 'Weak password!';
        title.classList.add("weak");
        body.classList.add("bg-weak");
    } else if (strength === 2) {
        strengthIndicator.textContent = 'Strength: Medium';
        feedback.textContent = 'Medium strength.';
        title.classList.add("medium");
        body.classList.add("bg-medium");
    } else if (strength === 3) {
        strengthIndicator.textContent = 'Strength: Strong';
        feedback.textContent = 'Strong password!';
        title.classList.add("strong");
        body.classList.add("bg-strong");
    } else {
        strengthIndicator.textContent = 'Strength: Very Strong';
        feedback.textContent = 'Very strong password!';
        title.classList.add("very-strong");
        body.classList.add("bg-very-strong");
    }
}

// Toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('toggle-visibility');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Show';
    }
}
