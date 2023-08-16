const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
   event.preventDefault();
   const formElements = event.currentTarget.elements;

   let email = formElements.email.value;
   let password = formElements.password.value;
   
   const form = {
    email: email,
    password: password,
   }
 console.log (form);

if (email === " " || password === " "){
    alert = "Всі поля повинні бути заповнені";
}
countReset()
})  
