 // Set the date we're counting down to (60 days from now)
        const countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 60);
        
        // Update the count down every 1 second
        const x = setInterval(function() {
            // Get today's date and time
            const now = new Date().getTime();
            
            // Find the distance between now and the count down date
            const distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result
            document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
            
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("days").innerHTML = "00";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";
            }
        }, 1000);
        
        // Button functionality
        document.querySelectorAll('.cta-btn').forEach(button => {
            button.addEventListener('click', function() {
                alert('Thank you for your interest in Godrej Urban Greens! Our sales team will contact you shortly.');
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
    const notifyForm = document.getElementById('notifyForm');
    const notifyInput = document.querySelector('.notify-input');
    const notifyBtn = document.querySelector('.notify-btn');

    // Form submission handler
    notifyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate email
        const email = notifyInput.value.trim();
        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }

        // Disable button during submission
        notifyBtn.disabled = true;
        notifyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SENDING...';

        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
            // Here you would typically make an AJAX request to your server
            // For demonstration, we'll simulate a successful submission
            simulateSubmission(email);
        }, 1500);
    });

    // Email validation function
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Show error message
    function showError(message) {
        // Remove any existing error messages
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Create and display error message
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = '#ff6b6b';
        errorElement.style.marginTop = '8px';
        errorElement.style.fontSize = '0.9rem';
        errorElement.textContent = message;
        
        notifyForm.appendChild(errorElement);
        
        // Add error class to input
        notifyInput.classList.add('error');
        setTimeout(() => {
            notifyInput.classList.remove('error');
        }, 2000);
    }

    // Simulate form submission (replace with actual AJAX call)
    function simulateSubmission(email) {
        console.log('Form submitted with email:', email); // For testing
        
        // Show success message
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        const successElement = document.createElement('div');
        successElement.className = 'success-message';
        successElement.style.color = '#2a9d8f';
        successElement.style.marginTop = '8px';
        successElement.style.fontSize = '0.9rem';
        successElement.style.fontWeight = '600';
        successElement.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! We\'ll notify you when we launch.';
        notifyForm.appendChild(successElement);

        // Reset form
        notifyInput.value = '';
        notifyBtn.disabled = false;
        notifyBtn.innerHTML = '<i class="fas fa-bell"></i> NOTIFY ME';

        // Remove success message after 5 seconds
        setTimeout(() => {
            successElement.remove();
        }, 5000);
    }

    // Add CSS for error state
    const style = document.createElement('style');
    style.textContent = `
        .notify-input.error {
            border-color: #ff6b6b !important;
            animation: shake 0.5s;
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
});
