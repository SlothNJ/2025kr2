function switchh() {
document.querySelector(".surname").innerText = "BIKOV";
document.querySelector(".name").innerText = "LEV";
document.querySelector(".otch").innerText = "VITALEVICH";
document.querySelector(".city").innerText = "C. DIMITROVGRAD";
document.querySelector(".pol").innerText = "MALE.";
document.querySelector(".obl").innerText = "ULYANOVSK OBL."; 
};
let button = document.querySelector(".but");
button.addEventListener('click', switchh);
document.querySelector(".name")