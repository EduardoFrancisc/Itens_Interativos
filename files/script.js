/*-------Radio Button------*/
let radio = document.getElementsByClassName("radioDefault");

radio[0].addEventListener("click", function() {
  radio[0].classList.toggle("iconRadioActive")
  if (radio[0].classList.contains("iconRadioActive")) {
    radio[1].classList.remove("iconRadioActive")
    radio[2].classList.remove("iconRadioActive")
  }
});

radio[1].addEventListener("click", function() {
  radio[1].classList.toggle("iconRadioActive")
  if (radio[1].classList.contains("iconRadioActive")) {
    radio[0].classList.remove("iconRadioActive")
    radio[2].classList.remove("iconRadioActive")
  }
});

radio[2].addEventListener("click", function() {
  radio[2].classList.toggle("iconRadioActive")
  if (radio[2].classList.contains("iconRadioActive")) {
    radio[0].classList.remove("iconRadioActive")
    radio[1].classList.remove("iconRadioActive")
  }
});