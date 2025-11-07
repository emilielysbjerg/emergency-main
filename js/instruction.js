console.log("Loaded instructions...");

document.querySelector("#cirkel_nede").addEventListener("click", vandmelonF);

document.querySelector("#cirkel_midte").addEventListener("click", vandmelonF);

document.querySelector("#cirkel_nede").addEventListener("click", vandmelonF);

function vandmelonF() {
  console.log("glad.vandmelon");
  document.querySelector("#Hotspots").classList.add("my_scale");
  document.querySelector("Hotspots").computedStyleMap.fill = "green";
}

document.querySelector(".info.text h2").textContent = "vandmelon";
