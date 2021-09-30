let form = document.querySelector('form');
let errorMsg = document.getElementsByClassName('errorMsg');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let emailAddress = document.querySelector('#emailAddress');
let password = document.querySelector('#password');

let array = [firstName, lastName, emailAddress, password];
let arrayTwo = ['First Name', 'Last Name', 'Email Address', 'Password'];

let regExFirstName = /[^a-zA-Z]/;
let regExEmail =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

form.addEventListener('submit', (e) => {
  array.forEach((element, i) => {
    // Remove Error warnings on focus
    element.addEventListener('focus', () => {
      element.classList.remove('input-error');
      errorMsg[i].textContent = ``;
      if (element.value === '' || element.value == 'email@example/com') {
        element.value = '';
        element.placeholder = `${arrayTwo[i]}`;
      }
    });
    // Input checks
    if (element.value == '' && element.id != 'emailAddress') {
      e.preventDefault();
      element.classList.add('input-error');
      errorMsg[i].textContent = `${arrayTwo[i]} cannot be empty`;
      element.placeholder = '';
    } else if (element.id === 'firstName') {
      if (regExFirstName.test(element.value)) {
        e.preventDefault();
        element.classList.add('input-error');
        errorMsg[
          i
        ].textContent = `${arrayTwo[i]} cannot contain numbers or symbols`;
        element.placeholder = '';
      } else if (element.value.length <= 2 && element.value.length > 0) {
        e.preventDefault();

        element.classList.add('input-error');
        errorMsg[i].textContent = `${arrayTwo[i]} too short`;
      } else {
        element.classList.remove('input-error');
      }
    } else if (element.id === 'lastName') {
      if (regExFirstName.test(element.value)) {
        e.preventDefault();
        element.classList.add('input-error');
        errorMsg[
          i
        ].textContent = `${arrayTwo[i]} cannot contain numbers or symbols`;
        element.placeholder = '';
      } else if (element.value.length > 0 && element.value.length <= 2) {
        e.preventDefault();
        element.classList.add('input-error');
        errorMsg[i].textContent = `${arrayTwo[i]} too short`;
      } else {
        element.classList.remove('input-error');
      }
    } else if (element.id === 'emailAddress') {
      if (element.value === '') {
        e.preventDefault();
        element.classList.add('input-error');
        errorMsg[i].textContent = `${arrayTwo[i]} cannot be empty`;
        element.value = 'email@example/com';
      } else if (!regExEmail.test(element.value)) {
        e.preventDefault();
        element.classList.add('input-error');
        errorMsg[i].textContent = `Not a valid E-mail`;
        element.value = 'email@example/com';
      }
    }
  });
});
