const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", function (event) {
    const clickedLink = event.target.closest("a");
    if (clickedLink) {
      navLinks.classList.remove("open");
    }
  });
}

const myEmail = "your-email@example.com";

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formStatus = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();
    let formIsValid = true;

    if (nameError) nameError.textContent = "";
    if (emailError) emailError.textContent = "";
    if (messageError) messageError.textContent = "";
    if (formStatus) formStatus.textContent = "";

    if (nameValue === "") {
      if (nameError) nameError.textContent = "Please enter your name.";
      formIsValid = false;
    }

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
      if (emailError) emailError.textContent = "Please enter a valid email address.";
      formIsValid = false;
    }

    if (messageValue.length < 10) {
      if (messageError) messageError.textContent = "Please write at least 10 characters.";
      formIsValid = false;
    }

    if (formIsValid) {
      const subject = "Portfolio message from " + nameValue;
      const body = messageValue + "\n\nFrom: " + nameValue + " (" + emailValue + ")";
      window.location.href =
        "mailto:" + myEmail +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      if (formStatus) formStatus.textContent = "Opening your email app...";
    }
  });
}
