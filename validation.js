document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Email validation
    var email = document.getElementById('email').value;
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
        alert("Please enter a valid email address.");
        return;
    }

    var password = document.getElementById('password').value;
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        alert("Password must contain at least 8 characters, including uppercase, lowercase, and numbers.");
        return;
    }

// Name validation
var name = document.getElementById('name').value;
if (!name.match(/^[A-Za-z ]+$/)) {
    alert("Name must only contain alphabetic characters.");
    return;
}

// Phone Number validation
var phone = document.getElementById('phone').value;
if (!phone.match(/^\d{10}$/)) {
    alert("Phone number must be 10 digits.");
    return;
}

// Date of Birth validation
var dob = new Date(document.getElementById('dob').value);
var today = new Date();
var age = today.getFullYear() - dob.getFullYear();
var m = today.getMonth() - dob.getMonth();
if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
}
if (age < 18) {
    alert("You must be at least 18 years old.");
    return;
}

// Message validation
var message = document.getElementById('message').value;
if (message.length < 20) {
    alert("Message must be at least 20 characters long.");
    return;
}

// Country validation
var country = document.getElementById('country').value;
if (country === "") {
    alert("Please select a country.");
    return;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validation Functions
    function validateName() {
        var name = document.getElementById('name').value;
        return /^[A-Za-z ]+$/.test(name);
    }

    function validateEmail() {
        var email = document.getElementById('email').value;
        return /^[^@]+@[^@]+\.[^@]+$/.test(email);
    }

    function validatePhone() {
        var phone = document.getElementById('phone').value;
        return /^\d{10}$/.test(phone);
    }


    // Update Validation Icons
    function updateIcon(elementId, isValid) {
        var icon = document.getElementById(elementId);
        if (isValid) {
            icon.classList.add('valid');
            icon.classList.remove('invalid');
            icon.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
        } else {
            icon.classList.add('invalid');
            icon.classList.remove('valid');
            icon.innerHTML = '<i class="fa-solid fa-times-circle"></i>';
        }
    }

    // Perform Validations
    updateIcon('name-icon', validateName());
    updateIcon('email-icon', validateEmail());
    updateIcon('phone-icon', validatePhone());

});

    this.submit();
});
