var nameError = document.getElementById('name-Error');
var phoneError = document.getElementById('phone-Error');
var emailError = document.getElementById('email-Error');
var msgError = document.getElementById('msg-Error');
var subError = document.getElementById('submit-Error');





function validationName(){
  var firstName = document.getElementById('conect-name').value ;
  if(firstName.length == 0){
     nameError.innerHTML = "name is required";
     return false;
  }
  if(!firstName.match(/^[A-za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "you must enter your full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validationPhone(){
  var Phone = document.getElementById('conect-phone').value ;
   if(Phone.lengthvalidationPhone == 0){
    phoneError.innerHTML = " you must enter your phone number";
   }
   if(!Phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = "10 numberis required";
    return false;
   }
   phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
   return true;
}


function validationEmail(){
 var email = document.getElementById('conect-email').value;
 if(email.length == 0){
  emailError.innerHTML = "email is required";
  return false;
 }
  if(!email.match(/^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/)){
    emailError.innerHTML = "Invalid email";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validationTeset(){
  var message = document.getElementById('conect-message').value;  
   var required = 30;
   var left =  required - message.length;

  if(left > 0){
    msgError.innerHTML = left + "char is required";
    return false;
  }
  msgError.innerHTML = '<i class="fa-solid fa-check"></i>' ;
  return true;
  }
function validateFom(){
  if (!validationName()|| !validationPhone() || !validationEmail() || !validationTeset()){
      subError.style.display = "block";
      subError.innerHTML ="fix error";
      setTimeout(function(){
        subError.style.display ="none";
      },3000);
      return false;
  }
 
}


 
