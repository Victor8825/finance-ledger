import { showModalWindow } from './modal';

const formRef = document.querySelector('.contact-form');
const inputRef = document.querySelectorAll('.input');
const warningNotificationRef = document.querySelector('.warning');

//check  and change placeholder position when input get  "blur" event
inputRef.forEach(input =>
  input.addEventListener('input', () => {
    input.value.length >= 1
      ? (input.nextElementSibling.style.top = '-25px')
      : (input.nextElementSibling.style.top = '16px');

    warningNotificationRef.style.display = 'none';
  })
);

//form validation

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { name, email } = event.currentTarget;

  if (email.value.length === 0) {
    warningNotificationRef.style.display = 'flex';
    return;
  }

  if (name.value.length >= 1 && email.value.length >= 1) {
    showModalWindow();
    event.currentTarget.reset();
  }

  // name.value.length <= 2
  //   ? name.classList.add('input--error')
  //   : name.classList.add('input--success');

  // console.log(`Login: ${login.value}, Password: ${password.value}`);
  // event.currentTarget.reset();
}
