const main = document.querySelector(".main");
const thanksContainer = document.querySelector(".thankyou");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () =>{thanksContainer.classList.remove("hide"); main.style.display ="none"}); 