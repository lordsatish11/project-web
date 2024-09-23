function createPassword() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('password').value = password;
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Password copied to clipboard");
}

function checkStrength(password) {
    const strength = document.getElementById('strength');
    const strengthText = document.getElementById('strength-text');
    let score = 0;

    if (password.length > 6) score += 20;
    if (password.length > 8) score += 20;
    if (/[a-z]/.test(password)) score += 20;
    if (/[A-Z]/.test(password)) score += 20;
    if (/[0-9]/.test(password)) score += 20;
    if (/[^a-zA-Z0-9]/.test(password)) score += 20;

    strength.value = score;

    if (score === 100) {
        strengthText.textContent = 'Strong';
        strengthText.style.color = 'green';
    } else if (score >= 60) {
        strengthText.textContent = 'Moderate';
        strengthText.style.color = 'orange';
    } else {
        strengthText.textContent = 'Weak';
        strengthText.style.color = 'red';
    }
}

function savePassword() {
    const password = document.getElementById('password').value;
    const websiteName = document.getElementById('website-name').value;
    if (password === '' || websiteName === '') {
        alert('Please generate a password and enter a website name.');
        return;
    }

    const savedPasswordsList = document.getElementById('saved-passwords-list');
    const listItem = document.createElement('li');
    listItem.textContent = ${websiteName}: ${password};
    savedPasswordsList.appendChild(listItem);

    // Clear the input field after saving
    document.getElementById('website-name').value = '';
}
