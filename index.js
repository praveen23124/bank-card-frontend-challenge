function display() {
  document.querySelector(".name").innerText = document.querySelector(".inputName").value;
}

function display1(){
  document.querySelector(".cardNumber").innerText = document.querySelector(".inputCardNumber").value;
}

function display2(){
  document.querySelector(".expiryMonth").innerText = document.querySelector(".inputExpMonth").value;
}

function display3(){
  document.querySelector(".expiryYear").innerText = document.querySelector(".inputExpYear").value;
}

function display4(){
  document.querySelector(".cvv").innerText = document.querySelector(".inputCvc").value;
}


function validate(){

  document.querySelector(".toWarn1").innerHTML = "";
  document.querySelector(".toWarn2").innerHTML = "";
  document.querySelector(".toWarn3").innerHTML = "";
  document.querySelector(".toWarn4").innerHTML = "";
  if(document.details.inputName.value==""){
    document.querySelector(".toWarn1").innerHTML = "Field must not be empty";
    document.details.inputName.focus();
    return false;
  }
  var letters = /^[A-Za-z]+$/;
   if(!document.details.inputName.value.match(letters))
     {
       document.querySelector(".toWarn1").innerHTML = "Fill only with alphabets";
       document.details.inputName.focus();
      return false;
     }
  if(document.details.inputCardNumber.value==""){
    document.querySelector(".toWarn2").innerHTML = "Field must not be empty";
    document.details.inputCardNumber.focus();
    return false;
  }
  var numbers = /^[0-9]+$/;
      if(!document.details.inputCardNumber.value.match(numbers))
      {
      document.querySelector(".toWarn2").innerHTML = "Wrong format, numbers only";
      document.details.inputCardNumber.focus();
      return false;
      }
  if(document.details.inputCardNumber.value.length<16 || document.details.inputCardNumber.value.length>16){
    document.querySelector(".toWarn2").innerHTML = "must be 16 numbers";
    document.details.inputCardNumber.focus();
      return false;
      }

  if(document.details.inputExpMonth.value==""){
    document.querySelector(".toWarn3").innerHTML = "Field must not be empty";
    document.details.inputExpMonth.focus();
    return false;
  }
  if(document.details.inputExpMonth.value.length<2 || document.details.inputExpMonth.value.length>2){
    document.querySelector(".toWarn3").innerHTML = "must be 2 characters";
    document.details.inputExpMonth.focus();
    return false;
  }
  if(!document.details.inputExpMonth.value.match(numbers))
  {
  document.querySelector(".toWarn3").innerHTML = "Wrong format, numbers only";
  document.details.inputExpMonth.focus();
  return false;
  }
  if(document.details.inputExpYear.value==""){
    document.querySelector(".toWarn3").innerHTML = "Field must not be empty";
    document.details.inputExpYear.focus();
    return false;
  }
  if(document.details.inputExpYear.value.length<2 || document.details.inputExpYear.value.length>2){
    document.querySelector(".toWarn3").innerHTML = "must be 2 characters";
    document.details.inputExpYear.focus();
    return false;
  }
  if(!document.details.inputExpYear.value.match(numbers))
  {
  document.querySelector(".toWarn3").innerHTML = "Wrong format, numbers only";
  document.details.inputExpYear.focus();
  return false;
  }
  if(document.details.inputCvc.value==""){
    document.querySelector(".toWarn4").innerHTML = "Fill the field";
    document.details.inputCvc.focus();
    return false;
  }
  if(!document.details.inputCvc.value.match(numbers))
  {
  document.querySelector(".toWarn4").innerHTML = "Wrong format, numbers only";
  document.details.inputCvc.focus();
  return false;
  }
  if(document.details.inputCvc.value.length<3 || document.details.inputCvc.value.length>3){
    document.querySelector(".toWarn4").innerHTML = "must be 3 characters";
    document.details.inputCvc.focus();
    return false;
  }
}
