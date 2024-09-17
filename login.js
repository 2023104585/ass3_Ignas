const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const dob = document.getElementById('dob');
const submitButton = document.getElementById('submit'); // Select the submit button

form.addEventListener('submit', e => { 
    e.preventDefault(); // Prevent form submission for validation
    validateInputs(); // Validate form inputs
});

// Function to set error message
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

// Function to indicate success
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Function to validate inputs
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const dobValue = dob.value.trim();

    let isFormValid = true; // Assume form is valid unless proven otherwise
    let emptyFields = [];   // Array to hold empty field names

    // Username validation
    if (usernameValue === '') {
        setError(username, 'Username is required.');
        emptyFields.push('Username'); // Add field name to the array
        isFormValid = false;
    } else {
        setSuccess(username);
    }

    // Email validation
    if (emailValue === '') {
        setError(email, 'Email is required.');
        emptyFields.push('Email'); // Add field name to the array
        isFormValid = false;
    } else {
        setSuccess(email);
    }

    // Password validation
    if (passwordValue === '') {
        setError(password, 'Password is required.');
        emptyFields.push('Password'); // Add field name to the array
        isFormValid = false;
    } else {
        setSuccess(password);
    }

    // Date of birth validation
    if (dobValue === '') {
        setError(dob, 'Date of Birth is required.');
        emptyFields.push('Date of Birth'); // Add field name to the array
        isFormValid = false;
    } else {
        setSuccess(dob);
    }

    // If there are any empty fields, show an alert listing them
    if (emptyFields.length > 0) {
        alert("Please fill in the following fields: " + emptyFields.join(', '));
    } else if (isFormValid) {
        // Redirect to the new page if form is valid
        window.location.href = 'sched.html';
    }
};
