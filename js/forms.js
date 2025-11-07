//*Form input start*//
const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();

  form.querySelector(":user-invalid").focus();
  form.querySelector(".error-message").style.display = "block";
}

form.addEventListener("invalid", cancelPopup, true);
//* Form input slu*//

//* Formoutput start*//
const firstNameOutput = document.querySelector("#fornavn_output");
const lastNameOutput = document.querySelector("#efternavn_output");
const alderOutput = document.querySelector("#alder_output");
const adresseOutput = document.querySelector("#adresse_output");
const byOutput = document.querySelector("#by_output");
const postnummerOutput = document.querySelector("#postnummer_output");

function handleSubmit(event) {
  console.log("nu burde formen være loades");
  event.preventDefault();

  const formData = new FormData(form);

  const firstName = formData.get("fornavn");
  const lastName = formData.get("efternavn");
  const alder = formData.get("alder");
  const adresse = formData.get("adresse");
  const by = formData.get("by");
  const postnummer = formData.get("postnummer");

  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  alderOutput.textContent = alder;
  adresseOutput.textContent = adresse;
  byOutput.textContent = by;
  postnummerOutput.textContent = postnummer;
}
form.addEventListener("submit", handleSubmit);

//* Formoutput start*//
