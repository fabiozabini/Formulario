const form = document.getElementById("meuForm");
const button = document.getElementById("button");

form.addEventListener("input", function () {
  if (form.checkValidity()) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "disabled");
  }
});

const formulario = document.getElementById("meuForm");
const emailInput = document.getElementById("email");
const errorMensage = document.getElementById("errormensage");
emailInput.addEventListener("input", function () {
  const value = emailInput.value;
  const result = isValidEmail(value);
  console.log(result);
  if (!result) {
    errorMensage.textContent = "Campo inválido";
    errorMensage.style.color = "red";
    errorMensage.style.fontWeight = "bold";
  } else {
    errorMensage.textContent = "";
  }
});

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}



const telefoneInput = document.getElementById("telefone");
const error = document.getElementById("error");
telefoneInput.addEventListener("input", function () {
  let value = telefoneInput.value;
  value = value.replace(/\D/g, '');

  if (value.length >= 2 ) {
    value = '(' + value.substr(0, 2) + ') ' + value.substr(2);
  } 
 
  if(value.length > 9) {
    value = value.substr(0, 10) + '-' + value.substr(10);
  }

  

  telefoneInput.value = value;
  console.log(telefoneInput.value);
  const resultado = isValidTelefone(value);
    if (!resultado) {
    error.textContent = "Campo inválido";
    error.style.color = "red";
    error.style.fontWeight = "bold";
  } else {
    error.textContent = "";
  }
});
function isValidTelefone(telefone) {
  const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  return telefoneRegex.test(telefone);
}


const cepInput = document.getElementById("cep");
const errormsg = document.getElementById("errormsg");
cepInput.addEventListener("input", function () {
  const value = cepInput.value;
  const result = isValidCep(value);
  console.log(result);
  if (!result) {
    errormsg.textContent = "Campo inválido";
    errormsg.style.color = "red";
    errormsg.style.fontWeight = "bold";
  } else {
    errormsg.textContent = "";
  }
});

function isValidCep(cep) {
  const cepRegex = /^\d{5}-\d{3}$/;
  return cepRegex.test(cep);
}




