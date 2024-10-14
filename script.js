document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    // Password strength check
    const strength = checkPasswordStrength(password);

    result.innerHTML = `<p>Password Strength: <strong>${strength}</strong></p>`;
});

// Function to check password strength
function checkPasswordStrength(password) {
    let strength = "Weak";

    if (password.length >= 8) {
        if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[\W_]/.test(password)) {
            strength = "Very Strong";
        } else if (/[a-zA-Z]/.test(password) && /\d/.test(password)) {
            strength = "Strong";
        } else {
            strength = "Medium";
        }
    }

    return strength;
}
