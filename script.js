const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", function () {
  navLinks.classList.remove("open");
});

const myEmail = "your-email@example.com";

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();
  let formIsValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  if (nameValue === "") {
    nameError.textContent = "Please enter your name.";
    formIsValid = false;
  }

  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    emailError.textContent = "Please enter a valid email address.";
    formIsValid = false;
  }

  if (messageValue.length < 10) {
    messageError.textContent = "Please write at least 10 characters.";
    formIsValid = false;
  }

  if (formIsValid) {
    const subject = "Portfolio message from " + nameValue;
    const body = messageValue + "\n\nFrom: " + nameValue + " (" + emailValue + ")";
    window.location.href =
      "mailto:" + myEmail +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }
});
