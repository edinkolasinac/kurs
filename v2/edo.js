const button = document.querySelector('button')
function pali() {
  button.classList.toggle('alt.color')

}

button.addEventListener('click', pali);
