//to display date

const date = new Date();
const dateToday = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const dayToday = date.getDay();

const htmldate = document.querySelector('.date');

const monthArray = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

const customMonth2 = monthArray[(currentMonth)];
console.log(customMonth2);

const completeDate2 = dateToday + '/' + customMonth2 + '/' + currentYear;
console.log(completeDate2);

htmldate.innerHTML = completeDate2;

// to dispaly time

const currentHours = date.getHours();
const currentMinutes = date.getMinutes();
const currentSeconds = date.getSeconds();

const htmltime = document.querySelector('.time');

const time = currentHours +':'+ currentMinutes +':'+ currentSeconds;

htmltime.innerHTML = time;

const nature = document.getElementById('nature');

natureImages = ["https://wallpapercave.com/wp/wp4676582.jpg","https://www.99images.com/download-image/772583/1920x1080","https://pixelz.cc/wp-content/uploads/2017/11/reindeer-at-sunset-uhd-4k-wallpaper.jpg"];

let i = 0;

setInterval(function(){
    if(i < natureImages.length){
        nature.src = natureImages[i];
        i++;
    }else{
        i=0;
    }
},2000)

//popup after 10 seconds

setTimeout(function(){
    modal.style.display = "block";
},10000)

// Get the button that opens the modal

var button = document.querySelector('.button');

//get the modal

var modal = document.querySelector('.modal');

// Get the <div> element that closes the modal

var close = document.querySelector('.close');

// When the user clicks the button, open the modal

button.addEventListener('click',function(){
    modal.style.display = "block";
})

close.addEventListener('click',function(){
    modal.style.display = "none";
})


// When the user clicks anywhere outside of the modal, close it

document.addEventListener('click',function(event) {
    if(event.target == modal){
      modal.style.display = "none";
    }
})

var modalRegistration = document.querySelector('.modal-registration');


// modalRegistration.addEventListener('scroll',function(){
//     console.log(modalRegistration.scrollY);
// })

document.addEventListener('keydown',function(event){
    if(event.key == 'Escape'){
    modal.style.display = "none";
}
})

// let name = document.getElementById('username');

// userName.addEventListener('keydown',function(e){
//     console.log(e);
// })


function clearerr(){
errors = document.getElementById('usernameerr');
for(let item of errors){
    item.innerHTML = "";
}
}

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