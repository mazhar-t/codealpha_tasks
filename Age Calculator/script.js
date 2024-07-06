function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const result = document.getElementById('result');

    // Validate inputs
    if (!day || !month || !year) {
        result.innerText = 'Please fill in all fields.';
        result.className = 'error';
        return;
    }
    
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
        result.innerText = 'Please enter valid values.';
        result.className = 'error';
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    // Check if the entered date is valid
    if (birthDate > today) {
        result.innerText = 'Birth date cannot be in the future.';
        result.className = 'error';
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    result.innerText = `You are ${age} years old.`;
    result.className = '';
}
