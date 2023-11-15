const username = document.querySelector('#_username');
const email = document.querySelector('#email');
const password = document.querySelector('#_password');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const role = document.querySelector('#_role');
const regBtn = document.querySelector('#reg-btn');

// function displayMsg() {
//     const msgContainer = document.querySelector('#msgContainerReg');

//     setTimeout(() => {

//     }, 3000);

// }

regBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = {
    username: username.value,
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    role: role.value
  };

  fetch('http://localhost:3000/admin/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
  })
      .then(res => res.json())
      .then(
          data => {
              // function displayMsg(color, resp) {
              //   const msgContainerLog =
              //   document.querySelector('#msgContainerLog');

              //   msgContainerLog.innerText = `${resp}`;
              //   msgContainerLog.classList.add(`${color}`);
              //   msgContainerLog.classList.remove(`invisible`);

              //   setTimeout(
              //       () => {
              //         msgContainerLog.classList.add('invisible');
              //         msgContainerLog.classList.remove(`${color}`);
              //       },

              //       3000);
              // }

              // if (data.msg) {
              //   displayMsg('text-success', data.msg);
              //   setTimeout(() => {
              //     window.location.href = './dashboard.html';
              //   }, 3000);
              // }

              // if (data.err) {
              //   displayMsg('text-danger', data.err);
              // }


              // if (data.tkn) {
              //   let date = new Date();
              //   date.setTime(
              //       date.getTime() +
              //       (6 * 60 * 60 * 1000));  // 6 hours in milliseconds
              //   let expires = '; expires=' + date.toUTCString();

              //   document.cookie =
              //       `OAuth_SESH=${data.tkn}; path=/;
              //       samesite=strict${expires}`;

              //   window.location.href = './dashboard.html';
              // }
              // console.log(data);
          })
})
