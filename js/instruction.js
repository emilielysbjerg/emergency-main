console.log("Loaded instructions...");

document.querySelector("#cirkel_top").addEventListener("click", vandmelonF);

//øverste cirkel start*//
function vandmelonF() {
  console.log("vandmelonf kører");
  document.querySelector(".circle_top ").classList.add("my_scale");
  document.querySelector(".info-text .placeholder").textContent =
    "Her skal stå tekst";
}
//øverste cirkel slut*//

//midte cirkel start*//
function midteF() {
  console.log("vandmelonf kører");
  document.querySelector(".circle_mid").classList.add("my_scale");
  document.querySelector(".info-text .placeholder").textContent =
    "Her skal stå tekst";
}
//midte cirkel slut*//

//nederste cirkel start*//
function bundF() {
  console.log("vandmelonf kører");
  document.querySelector(".circle_bottom").classList.add("my_scale");
  document.querySelector(".info-text .placeholder").textContent =
    "Her skal stå tekst";
}
//nedesrte cirkel slut*//

document.querySelector("#cirkel_midte").addEventListener("click", midteF);
document.querySelector("#cirkel_bund").addEventListener("click", bundF);

function midteF() {
  console.log("midte kører");
  document.querySelector("#Hotspots").classList.add("my_scale");
  document.querySelector(".info-text .placeholder").textContent =
    "Her skal stå mere tekst";
}

// document.querySelector("#cirkel_midte").addEventListener("click", vandmelonF);

// document.querySelector("#cirkel_nede").addEventListener("click", vandmelonF);

// function vandmelonF() {
//   console.log("glad.vandmelon");
//   document.querySelector("#Hotspots").classList.add("my_scale");
//   document.querySelector("#Hotspots").computedStyleMap.fill = "green";

//}

//document.querySelector(".info.text h2").textContent = "vandmelon";
