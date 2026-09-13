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

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

    nameError.textContent = "";
    emailError.textContent = "";

    // Check 1: Name is required
    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    // Check 2: Email format
    if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }

});

if (valid) {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
}

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
