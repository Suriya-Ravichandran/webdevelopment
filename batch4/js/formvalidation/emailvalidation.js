const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


function validemail(email){
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}


const alertTrigger = document.getElementById('liveAlertBtn')
const email=document.getElementById('email')

if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      const emailValue = email.value; // Get the value of the email input field
      if (validemail(emailValue)) {
        appendAlert('Valid Email id', 'success');
      } else {
        appendAlert('Not valid Email id', 'danger');
      }
    });
}

