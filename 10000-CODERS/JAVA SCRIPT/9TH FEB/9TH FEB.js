//functions

//calling a function

function test (){
    console.log('test successful');
}
test();

//parameters and arguments

function userName (name){
    console.log(name);
}
userName('mahesh');

function userAge (age){
    console.log(age);
}
userAge(22);

function userAge2 (name,age){
    console.log(age);
}
userAge2();

//self calling functions(self execution function)

// (function self (age){
//     console.log(age);
// })self (22);

(function  (age){
    console.log(age);
})(22);

(function  (age){
    console.log(age);
})();

(function  (name,age){
    console.log(name);
})('mahesh');

(function  (name,age){
    console.log(name,'age '+ age);
})('mahesh',22);

//nested functions

function x(){
    function y(z){
        console.log(z)
    }
    y(0);
}
x();

function a(){
    console.log(b)
    function b(c){
        console.log(c)
    }
    b(2);
}
a();

//anonymous function (no function name)

let gender = function (gender){
    console.log(gender);
}
gender('male');

let myFunction = function (){
    alert('I am a function');
}
myFunction();

var gstCalculation = function(amount,gst){
var total = amount + amount/100*gst;
    console.log(total);
}
gstCalculation(80000,20);

//functions with return statement

var cal = document.getElementById('gst');

function gstcal(amount,gst){
    return amount + amount/100*gst;
}

cal.innerHTML = gstcal(24680,8);

//prime check using return statement in a function

function primeCheck(number){
    var count = 0;
    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            count++;
        }
        if (count == 2){
            return 'number is a prime';
        }
    }
}

cal.innerHTML = primeCheck(171);

//default parameter function

function trail(name,age=22){
    console.log(name,age);
}
trail('mahesh');

function trail1(name,age=22){
    console.log(age);
}
trail1();

function trail2(name,age=22){
    console.log(name,age);
}
trail2('mahesh',24);

function trail3(name='user',age=22){
    console.log('welcome ' + name,'age ' + age);
}
trail3('mahesh');

function trail4(name='user',age=22){
    console.log('welcome ' + name,'age ' + age);
}
trail4();


// callback function

function d(para){
    console.log(para);
    para();
}
function e(){
    console.log('test successful');
}
d(e);


// function greeting(name){
//     alert('hello ' + name);
// }
// function processUserInput(callBackFunction){
//     var user = prompt('enter your name');
//     callBackFunction(user)
// }
// processUserInput(greeting);

function testing(test){
    console.log(test);
    test()
}
function call(){
    console.log('test successful');
}
testing(call);

function primeTesting(number){
    let counting = 0;
    for(let j = 1; j <= number; j++){
        if(number%j==0){
            counting++;
        }
    }
    if(counting == 2){
        alert(number + ' is a prime');
    }else{
        alert(number + ' is not a prime');
    }
}
function inputNumber(callback){
    var num = prompt('enter a number to check if its a prime')
    callback(num);
}
inputNumber(primeTesting);
