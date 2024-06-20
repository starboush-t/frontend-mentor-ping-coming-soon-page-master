const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("btn");
const errorMsg = document.querySelector(".errorMsg");

emailInput.addEventListener("keydown", (e) => {
  //   e.preventDefault();
  console.log(e.target.value);
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validateEmail(emailInput.value)) {
    errorMsg.classList.remove("hidden");
    emailInput.classList.add("error");
    errorMsg.classList.add("active");
  } else {
    errorMsg.classList.remove("active");
    emailInput.classList.remove("error");
    errorMsg.classList.add("hidden");
  }
});
