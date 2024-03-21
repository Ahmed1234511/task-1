var num = parseInt(prompt('Enter Number'));

if(num){
    if (num > 0) {
        console.log('This is Positive');
    }else if(num < 0){
        console.log('This is Negative');
    }else{
        console.log('Try again');
    }
}else{
    console.log('Enter Your Number');
}

var num = parseInt(prompt('Enter Number'));

if(num){
    if (num % 2 == 0) {
        console.log('Your number is Even');
    }
   else  {
        console.log('Your number is odd');
    }
}else{
    console.log('Enter your Number');
}

var num1 = parseInt(prompt('Enter First Number'));
var num2 = parseInt(prompt('Enter Secand Number'));

if(num1 && num2){
    if (num1 == num2) {
        console.log('num1 equal num2');
    } else if(num1 > num2){
        console.log('num1 > num2');
    }else{
        
        console.log('num1 < num2');
    }

}else{
    console.log('Check Your Numbers');
}

var grade  = parseInt(prompt('Enter Your Grade '));
    if(grade ){
        if (grade >= 0 && grade < 10) {
            console.log('A');
        } else if(grade >= 10 && grade < 20){
            console.log('B');
        }else if(grade >= 20 && grade < 30){
            console.log('C');
        }else if(grade >= 30 && grade < 40){
            console.log('D');
        }else if(grade >= 40 && grade < 50){
            console.log('E');
        }else if(grade >= 50 && grade < 60){
            console.log('F');
        }else if(grade >= 60 && grade < 70){
            console.log('G');
        }else if(grade >= 70 && grade < 80){
            console.log('H');
        }else if(grade >= 80 && grade < 90){
            console.log('I');
        }else if(grade >= 90 && grade <= 100){
            console.log('J');
        }else{
            console.log('Enter Number Range 0 to 100');
        }
    }
    else{
        console.log(' Enter Your grade');
    }
var age  = parseInt(prompt(' Enter Your Age'));

if (age) {
    if (age < 12) {
        console.log('Price Ticket is 5');
    } else if(age < 18){
        console.log('Price Ticket is 10');
        
    }
     else if(age < 60){
        console.log('Price Ticket is 20');
    }else if(age >= 60){

        console.log('Price Ticket is 15');
    }
} else {
    console.log('Enter Your Age');
}