// Yoga class data
const yogaClasses = [
    {
        preference: "gentle",
        name: "Gentle Yoga",
        description: "A slower class with simple movements and stretches."
    },
    {
        preference: "active",
        name: "Vinyasa Yoga",
        description: "A more active class that connects movement with breathing."
    },
    {
        preference: "relaxing",
        name: "Restorative Yoga",
        description: "A relaxing class focused on gentle poses and mindful breathing."
    }
];

// Workshop list
const workshops = [
    "Beginner Yoga Basics",
    "Desk-to-Mat Stretch Workshop",
    "Rest and Restore Evening"
];

// Form
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const successMessage = document.getElementById("success-message");

    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    successMessage.textContent = "";

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    // Email validation
    if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // If everything is valid
    if (valid) {

        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);

        successMessage.textContent =
            "Thank you! Your request has been submitted.";

        form.reset();
    }

});

// Load saved information
window.onload = function () {

    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");

    if (savedName) {
        document.getElementById("name").value = savedName;
    }

    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
    }

};
