
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


/*-------Select/Dropdown------*/
let dropText = document.getElementsByClassName("dropText")
let dropdown = document.getElementsByClassName("dropdown-content");
let seta = document.querySelector("i")
let select = document.getElementsByClassName("selctorText");
let item = document.querySelectorAll("li");
let textSelector = select[0].textContent;

dropText[0].addEventListener("click", function() {
  dropdown[0].classList.toggle("dropdownActive")
  seta.classList.toggle("animacao")
  dropdown[0].addEventListener("click", function() {
    if (dropdown[0].classList.contains("dropdownActive")) {
      seta.classList.toggle("animacao")
      dropdown[0].classList.remove("dropdownActive")
    }
  });
});

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function() {
    select[0].innerText = item[i].innerText
  })
}


/*-------Checkbox------*/
let checks = document.getElementsByClassName("default")
let container = document.querySelectorAll(".checkDefault")
let filho1 = checks[0];
let filho2 = checks[1]
let pai = checks[2];

pai.addEventListener("click", function(){
    if(pai.classList.value == "default intermed" ){
        filho1.setAttribute("class","default")
        filho2.setAttribute("class","default")
        pai.setAttribute("class","default")
}else{
    pai.classList.toggle("iconActive");
    pai.classList.remove("intermed");
    filho1.classList.toggle("iconActive");
    filho2.classList.toggle("iconActive");
}
});

filho1.addEventListener("click", function(){
    filho1.classList.toggle("iconActive")
    pai.classList.toggle("intermed")
    if(filho2.classList.contains("iconActive")){
        pai.classList.add("iconActive")
    }else{
        pai.classList.remove("iconActive")
        console.log(pai.className)
    }
});

filho2.addEventListener("click", function(){
    filho2.classList.toggle("iconActive")
    pai.classList.toggle("intermed")
    if(filho1.classList.contains("iconActive")){
        pai.classList.add("iconActive")
    }else{
        pai.classList.remove("iconActive")
    }
});