const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
   event.preventDefault();
   const formElements = event.currentTarget.elements;
   console.log(formElements);

   let email = formElements.email.value;
   let password = formElements.password.value;

if (email === " " || password === " "){
    alert = "Всі поля повинні бути заповнені";
}
})  
