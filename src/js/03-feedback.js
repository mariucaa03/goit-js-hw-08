import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');
const submitButton = feedbackForm.querySelector('button[type="submit"]');

const saveFormState = throttle(function () {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

function populateFormFields() {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState !== null) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
}

document.addEventListener('DOMContentLoaded', populateFormFields);

feedbackForm.addEventListener('input', saveFormState);

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);
});
