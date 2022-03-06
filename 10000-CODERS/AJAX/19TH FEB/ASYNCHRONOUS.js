//ajax

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const placement = document.querySelector('.placement');
const result = document.getElementById('result');
var modal = document.querySelector('.modal');
var close = document.querySelector('.close');
const body = document.querySelector('.body');


const getTheData = function (path) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `${path}.html`, true);

  xhr.onload = function () {
      if(xhr.status == 200 && xhr.readyState == 4){
          result.innerHTML = xhr.responseText;
          console.log(result);
      }
  }

  xhr.send();
}

home.addEventListener('click',() =>{
    getTheData('home');
})
about.addEventListener('click',() =>{
    getTheData('about');
    const row = document.querySelector(".row");

const getData = async function () {
  const response = await fetch("https://fakestoreapi.com/products");
  console.log(response);
  const data = await response.json();
  console.log(data);
  let i = 0;
  let html = "";
    for (let value in data) {

        html += `<div class = "card col-2">

        <img src="${data[i].image}" alt="" class="image img${i}"></br>

        ${data[i].title}</br>

        ${data[i].rating.rate}*   (${data[i].rating.count})</br>

        $${data[i].price}

        </div>`
        
        i++;
      }
      row.innerHTML = html;
  }
getData();
})
placement.addEventListener('click',() =>{
    getTheData('placements');
})
contact.addEventListener('click',() =>{
    modal.style.display = "block";
    body.style.overflow = 'hidden';
    console.log(modal);
})
close.addEventListener('click',function(){
    modal.style.display = "none";
    body.style.overflow = 'auto';
})
document.addEventListener('click',function(event) {
    if(event.target == modal){
      modal.style.display = "none";
      body.style.overflow = 'auto';
    }
})
document.addEventListener('keydown',function(event){
    if(event.key == 'Escape'){
    modal.style.display = "none";
    body.style.overflow = 'auto';
}
})


var reservebtn = document.querySelector('.btn-bottom');

reservebtn.addEventListener('click',function(e){
    e.preventDefault();
    var userName = document.getElementById('username').value;
    console.log(userName);
    
    var userNameErr = document.getElementById('usernameerr');

    var email = document.getElementById('email').value;

    var emailErr = document.getElementById('emailerr');

    var phone = document.getElementById('phone').value;

    var phoneErr = document.getElementById('phoneerr');

    if(userName == ''){

        // document.getElementById('usernameerr').innerHTML = 'username should not be empty';
        // document.getElementById('usernameerr').style.color = 'red';
        // document.getElementById('usernameerr').style.fontStyle = 'italic';
        
        userNameErr.innerHTML = 'username should not be empty';
        userNameErr.style.color = 'red';
        userNameErr.style.fontStyle = 'italic';
    }
    else if((userName.length < 3) || (userName.length > 20)){
        userNameErr.innerHTML = 'username must be between 3 and 20 charcters';
        userNameErr.style.color = 'red';
        userNameErr.style.fontStyle = 'italic';
    }
    else if(!isNaN(userName)){
        userNameErr.innerHTML = 'username should not contain numbers';
        userNameErr.style.color = 'red';
        userNameErr.style.fontStyle = 'italic';
    }
    if(email == ''){
        emailErr.innerHTML = 'please enter a valid email';
        emailErr.style.color = 'red';
        emailErr.style.fontStyle = 'italic';
    }
    else if(!(email.includes('@'))){
        emailErr.innerHTML = 'please enter a valid email';
        emailErr.style.color = 'red';
        emailErr.style.fontStyle = 'italic';
    }
    else if(!(email.charAt(email.length - 4) == '.') && !(email.charAt(email.length - 3) == '.')){
        emailErr.innerHTML = 'please enter a valid email';
        emailErr.style.color = 'red';
        emailErr.style.fontStyle = 'italic';
    }
    if(phone.length != 10){
        phoneErr.innerHTML = 'please enter a valid number';
        phoneErr.style.color = 'red';
        phoneErr.style.fontStyle = 'italic';
    }
})