const username = document.querySelector('#i-usr');
const password = document.querySelector('#i-psw');
const loginBtn = document.querySelector('#login-btn');



loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = {username: username.value, password: password.value};
  fetch('http://localhost:3000/admin', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
  })
      .then(res => res.json())
      .then(data => {
        function displayMsg(color, resp) {
          const msgContainerLog = document.querySelector('#msgContainerLog');

          msgContainerLog.innerText = `${resp}`;
          msgContainerLog.classList.add(`${color}`);
          msgContainerLog.classList.remove(`invisible`);

          setTimeout(
              () => {
                msgContainerLog.classList.add('invisible');
                msgContainerLog.classList.remove(`${color}`);
              },

              3000);
        }

        if (data.msg) {
          displayMsg('text-success', data.msg);
          setTimeout(() => {
            window.location.href = './dashboard.html';
          }, 3000);
        }

        if (data.err) {
          displayMsg('text-danger', data.err);
        }
      })
})
