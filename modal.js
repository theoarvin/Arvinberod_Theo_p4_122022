function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const form = document.querySelector(".form");
const firstError = document.querySelector(".firstError");
const lastError = document.querySelector(".lastError");
const emailError = document.querySelector(".emailError");
const dateError = document.querySelector(".dateError");
const errorQuantity = document.querySelector(".errorQuantity");
const errorRadio = document.querySelector(".errorRadio");
const checkboxConditions = document.querySelector("#checkbox1");
const errorConditions = document.querySelector(".errorConditions");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log(form.location);
}

// close modal
close.addEventListener("click", closeModal);

function closeModal() {
  location.reload();
}

// first name validation
const validFirstName = (input) => {
  if (input.value.split(" ").join("").length < 2) {
    firstError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstError.style.color = "red";
    form.first.style.border = " 2px solid red";
    return false;
  } else {
    firstError.innerHTML = "";
    form.first.style.border = "none";
    return true;
  }
};

// last name validation
const validLastName = (input) => {
  if (input.value.split(" ").join("").length < 2) {
    lastError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastError.style.color = "red";
    form.last.style.border = " 2px solid red";
    return false;
  } else {
    lastError.innerHTML = "";
    form.last.style.border = "none";
    return true;
  }
};

// email validation
const validEmail = (input) => {
  const emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
  );

  if (emailRegExp.test(input.value) === true) {
    emailError.innerHTML = "";
    form.email.style.border = "none";
    return true;
  } else {
    emailError.innerHTML = "Veuillez rentrer un email valide";
    emailError.style.color = "red";
    form.email.style.border = " 2px solid red";
    return false;
  }
};

// birthdate validation
const validBirthdate = (input) => {
  const now = new Date();
  const date = new Date(input.value.split("-").join(","));
  const dateRegExp = new RegExp(
    /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
  );

  if (dateRegExp.test(input.value)) {
    if (date.getFullYear() >= now.getFullYear()) {
      dateError.innerHTML = "Vous devez entrer votre date de naissance.";
      dateError.style.color = "red";
      form.birthdate.style.border = " 2px solid red";
      return false;
    }
    dateError.innerHTML = "";
    form.birthdate.style.border = "none";
    return true;
  } else {
    dateError.innerHTML = "Vous devez entrer votre date de naissance.";
    dateError.style.color = "red";
    form.birthdate.style.border = " 2px solid red";
    return false;
  }
};

// quantity validation
const validQuantity = (input) => {
  const number = Number(input.value);
  if (!input.value) {
    errorQuantity.innerHTML = "Veulliez saisir une valeur entre 0 et 99";
    errorQuantity.style.color = "red";
    form.quantity.style.border = "2px solid red";
    return false;
  }
  if (number >= 0 && number < 99) {
    errorQuantity.innerHTML = "";
    form.quantity.style.border = "none";
    return true;
  } else {
    errorQuantity.innerHTML = "Veulliez saisir une valeur entre 0 et 99";
    errorQuantity.style.color = "red";
    form.quantity.style.border = "2px solid red";
    return false;
  }
};

// location validation
const validLocation = () => {
  if (form.location.value) {
    errorRadio.innerHTML = "";
    return true;
  } else {
    errorRadio.innerHTML = "Veuillez choisir une ville";
    errorRadio.style.color = "red";
    return false;
  }
};

// condition validation
const validCondition = () => {
  console.log(checkboxConditions.value);
  if (checkboxConditions.checked) {
    console.log("ok");
    errorConditions.innerHTML = "";
    return true;
  } else {
    errorConditions.innerHTML = "Veuillez accepter les conditions";
    errorConditions.style.color = "red";
    console.log("pas ok");
    return false;
  }
};

// input listening
form.first.addEventListener("change", function () {
  validFirstName(this);
});
form.last.addEventListener("change", function () {
  validLastName(this);
});
form.email.addEventListener("change", function () {
  validEmail(this);
});
form.birthdate.addEventListener("change", function () {
  validBirthdate(this);
});
form.quantity.addEventListener("change", function () {
  validQuantity(this);
});

// form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // verification of inputs for the submit
  if (
    validFirstName(form.first) &&
    validLastName(form.last) &&
    validEmail(form.email) &&
    validBirthdate(form.birthdate) &&
    validQuantity(form.quantity) &&
    validLocation() &&
    validCondition()
  ) {
    // construction of the validation modal
    const modalBody = document.querySelector(".modal-body");
    form.style.display = "none";
    modalBody.classList.add("centerContent");
    const el = document.createElement("p");
    el.innerText = " Merci pour votre inscription";
    el.classList.add("textConfirmation");
    modalBody.appendChild(el);
    const btnForm = document.createElement("button");
    btnForm.innerText = "Fermer";
    btnForm.classList.add("btnForm");
    modalBody.appendChild(btnForm);
    btnForm.addEventListener("click", () => {
      location.reload();
    });
  }
});
