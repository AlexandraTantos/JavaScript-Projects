const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorContainer = document.getElementById("error-container");
    let errorMessage = "";
    if (name.trim() === "") {
      errorMessage += "Name is required.<br>";
    }
    if (email.trim() === "") {
      errorMessage += "Email is required.<br>";
    } else if (!isValidEmail(email)) {
      errorMessage += "Invalid email address.<br>";
    }
    if (message.trim() === "") {
      errorMessage += "Message is required.<br>";
    }
    if (errorMessage !== "") {
      errorContainer.innerHTML = errorMessage;
    } else {
      form.submit();
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
