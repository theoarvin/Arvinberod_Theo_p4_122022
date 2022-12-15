# Projet GameOn
1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

function closeModal() {
  // error message
  firstError.innerHTML = "";
  lastError.innerHTML = "";
  emailError.innerHTML = "";
  dateError.innerHTML = "";
  errorQuantity.innerHTML = "";
  errorRadio.innerHTML = "";
  errorConditions.innerHTML = "";
  // border red
  form.first.style.border = "none";
  form.last.style.border = "none";
  form.email.style.border = "none";
  form.birthdate.style.border = "none";
  form.quantity.style.border = "none";
  // input value
  form.first.value = "";
  form.last.value = "";
  form.email.value = "";
  form.birthdate.value = "";
  form.quantity.value = "";
 
  // reset input radio
  for( var i = 0; i < form.location.length; i++ )
    form.location[i].checked = false;
  // close modal
  modalbg.style.display = "none";
}