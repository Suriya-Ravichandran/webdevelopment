const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);
};

function passwordvalidate(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
  return regex.test(password);
}

const alertTrigger = document.getElementById('liveAlertBtn');
const password = document.getElementById('password'); // Correctly referencing password field

if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    const passwordValue = password.value; // Get the value of the password input field
    if (passwordvalidate(passwordValue)) {
      appendAlert('Strong Password', 'success');
    } else {
      appendAlert('Weak Password', 'danger');
    }
  });
}
