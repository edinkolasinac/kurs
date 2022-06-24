const form = document.getElementById("signup");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const passwordInput = document.getElementById("password");
const date = document.getElementById("date");

const isEmpty = (input, errorId) => {
  if (input.value === "") {
    document.getElementById(errorId).textContent = "Please input something";
    return false;
  } else {
    document.getElementById(errorId).textContent = "";
    return true;
  }
};

const hasMinCharacters = (input, errorId, minLength) => {
  if (input.value.length <= minLength) {
    document.getElementById(errorId).textContent =
      "Please input more characters";
    return false;
  } else {
    document.getElementById(errorId).textContent = "";
    return true;
  }
};

const valid = (input, errorId) => {
  let valid = false;
  const exist = isEmpty(input, errorId);

  switch (input.id) {
    case "name":
      const hasMin = hasMinCharacters(input, errorId, 4);
      valid = exist && hasMin;
      break;
    case "surname":
      const hasMin2 = hasMinCharacters(input, errorId, 4);
      value = exist && hasMin2;
      break;
    case "password":
      const hasMin3 = hasMinCharacters(input, errorId, 8);
      value = exist && hasMin3;
      break;
    case "date":
      break;
  }

  return valid;
};

const submitFunction = (event) => {
  event.preventDefault();
  const nameValid = valid(nameInput, "errorName");
  const surnameValid = valid(surnameInput, "errorSurname");
  const passwordValid = valid(passwordInput, "errorPassword");
  const dateValid = valid(date, "errorDate");

  if (nameValid && surnameValid && passwordValid && dateValid) {
    alert("Your inputs are valid");
  }

  console.log(event);
};

form.addEventListener("submit", submitFunction);