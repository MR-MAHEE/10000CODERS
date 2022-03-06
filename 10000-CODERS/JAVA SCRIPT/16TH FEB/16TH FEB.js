const date = new Date();
console.log(date);

const dateToday = date.getDate();
console.log(dateToday);

const currentMonth = date.getMonth();
console.log(currentMonth);

const currentYear = date.getFullYear();
console.log(currentYear);

const dayToday = date.getDay();
console.log(dayToday);

const getTheCurrentMonth = function(){
    switch(currentMonth){
        case 0 : return 'JAN';
        case 1 : return 'FEB';
    }
}

const customMonth = getTheCurrentMonth(currentMonth);
console.log(customMonth);

const completeDate = dateToday + '/' + customMonth + '/' + currentYear;
console.log(completeDate);
document.write('<p>' + completeDate + '</p>');

//to display complete date using array

const monthArray = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

const customMonth2 = monthArray[(currentMonth)];
console.log(customMonth2);

const completeDate2 = dateToday + '/' + customMonth2 + '/' + currentYear;
console.log(completeDate2);
document.write('<p>' + completeDate2 + '</p>');

//max,min,round,floor,ceil,random

console.log(Math.max(22,88,66,44,02));

console.log(Math.min(22,88,66,44,02));

console.log(Math.round(22.44));

console.log(Math.round(22.64));

console.log(Math.round(22.5));

console.log(Math.floor(22.44));

console.log(Math.floor(22.64));

console.log(Math.ceil(22.44));

console.log(Math.ceil(22.64));

console.log(Math.random());

//otp

const btn = document.querySelector('.btn');

const input = document.getElementById('input');

btn.addEventListener('click',function(){
    input.value = Math.round(Math.random()*10000);
    console.log(input.value);
})

//set timeout and set interval

setTimeout(function(){
    alert('this is a test');
},4000)

let count = 0;

const numberCount = document.querySelector('.count');

setInterval(function(){
    if (count<1000)
        count++;
    numberCount.innerHTML = count;
},20)

//time

