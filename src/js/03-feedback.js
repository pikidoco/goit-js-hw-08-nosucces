import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name=email]');
const messageTextarea = feedbackForm.querySelector('textarea[name=message]');

const OBJECT_KEY = "feedback-form-state";

const savedData=JSON.parse(localStorage.getItem(OBJECT_KEY));
if (savedData){
    emailInput.value = savedData.email;
    messageTextarea.value = savedData.message;
}
const savedFormData = throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    localStorage.setItem(OBJECT_KEY, JSON.stringify(formData));
  }, 500);

  feedbackForm.addEventListener('input', savedFormData);

  feedbackForm.addEventListener('submit', event => {
      event.preventDefault();
      const formData = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
console.log(formData);
localStorage.removeItem(OBJECT_KEY);
});
