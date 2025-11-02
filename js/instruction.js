console.log("Loaded instructions...");

document.querySelector("#sars").addEventListener("click", sarsF);

function sarsF() {
  console.log("sarsF er in da house");

  document.querySelector("#Hotspots").classList.add("my_scale");
}
