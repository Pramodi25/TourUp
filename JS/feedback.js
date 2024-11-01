const form = document.getElementById('feedbackForm');

function validateForm() {
    let isValid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const easyUse = document.querySelector('input[name="easyUse"]:checked');
    const contentHelpful = document.querySelector('input[name="contentHelpful"]:checked');
    const siteDesign = document.getElementById('siteDesign').value;
    const bookingProcess = document.querySelector('input[name="bookingProcess"]:checked');
    const customerService = document.getElementById('customerService').value;

    // Reset errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    if (!name) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    if (!easyUse) {
        document.getElementById('easyUseError').style.display = 'block';
        isValid = false;
    } else if (easyUse.value === 'No' && !document.getElementById('whyNotEasy').value) {
        document.getElementById('easyUseDetails').style.display = 'block';
        isValid = false;
    }

    if (!contentHelpful) {
        document.getElementById('contentHelpfulError').style.display = 'block';
        isValid = false;
    } else if (contentHelpful.value === 'No' && !document.getElementById('whyNotHelpful').value) {
        document.getElementById('contentHelpfulDetails').style.display = 'block';
        isValid = false;
    }

    if (!siteDesign) {
        document.getElementById('siteDesignError').style.display = 'block';
        isValid = false;
    }

    if (!bookingProcess) {
        document.getElementById('bookingProcessError').style.display = 'block';
        isValid = false;
    } else if (bookingProcess.value === 'Difficult' && !document.getElementById('whyDifficult').value) {
        document.getElementById('bookingProcessDetails').style.display = 'block';
        isValid = false;
    }

    if (!customerService) {
        document.getElementById('customerServiceError').style.display = 'block';
        isValid = false;
    }

    if (email && !validateEmail(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        const formData = new FormData(form);
        const feedbackData = {};
        formData.forEach((value, key) => {
            feedbackData[key] = value;
        });

        // Simulate sending data to server
        console.log('Feedback submitted:', feedbackData);

        // Show an alert message for successful submission
        alert('Your feedback has been submitted successfully!');

        // Clear form
        form.reset();
    }
});

// Show additional details fields if "No" is selected
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        const detailsId = this.id + 'Details';
        const details = document.getElementById(detailsId);
        if (details) {
            if (this.value === 'No') {
                details.style.display = 'block';
                const textarea = details.querySelector('textarea');
                if (textarea) textarea.required = true;
            } else {
                details.style.display = 'none';
                const textarea = details.querySelector('textarea');
                if (textarea) textarea.required = false;
            }
        }
    });
});