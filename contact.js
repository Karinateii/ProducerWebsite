// Get a reference to the contact form and the success message div
const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

// Add a submit event listener to the form
contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get user inputs (same as before)
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const message = document.getElementById("message").value;

    // Perform validation (same as before)
    if (firstname.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Show the success message
    successMessage.style.display = "block";

    // Clear the form
    contactForm.reset();

    // Set a timer to hide the success message after 3 seconds (adjust the time as needed)
    setTimeout(function () {
      successMessage.style.display = "none";
  }, 3000); // 3000 milliseconds = 3 seconds
});
