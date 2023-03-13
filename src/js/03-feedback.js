const lodashThrottle = require('lodash.throttle');
const throttleDelay = lodashThrottle(onInput, 500);

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');

console.log(messageEl.name);
console.log(emailEl.name);

const formDataObj = {
  email: emailEl.value,
  message: messageEl.value,
};

emailEl.addEventListener('input', throttleDelay);
messageEl.addEventListener('input', throttleDelay);
formEl.addEventListener('submit', onSubmit);

function onInput(e) {
  formDataObj[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDataObj));
}

function onSubmit(e) {
  e.preventDefault();

  if (emailEl.value && messageEl.value) {
    localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
    formDataObj.email = emailEl.value;
    formDataObj.message = messageEl.value;
  }
}

window.onload = function () {
  console.log(formDataObj);
  const savedInputData = localStorage.getItem(STORAGE_KEY);
  const parsedStorageData = JSON.parse(savedInputData);

  if (savedInputData !== null) {
    emailEl.value = parsedStorageData.email;
    messageEl.value = parsedStorageData.message;
  }
}


