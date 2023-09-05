const form = document.querySelector('.login-form')

form.addEventListener('submit', clickSubmit)

function clickSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  let email = formElements.email.value;
  let password = formElements.password.value;
  
  const formConsole = {
         email: email,
         password: password,
        }

  if (email === " " || password === " "){
    alert = "Всі поля повинні бути заповнені";} 
    console.log(formConsole)
    form.reset()
}
