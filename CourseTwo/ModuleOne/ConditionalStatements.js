var score = 39;

if(score < 50) {
    console.log("You failed the exam");
} else if (score  >= 50 ){
    console.log("You passed the exam");
}

var place = 'first';

if (place == 'first') {
    console.log("Gold");
} else if( place == 'second') {
    console.log("Silver");
} else if ( place == "third") {
    console.log("Bronze");
}

switch(place){
    case "first" :
        console.log("Gold");
        break;
    default :
        console.log("Another place");
        break;
}



var age = 10;
if(age >= 65) {
    console.log("You get your income from your pension");
} else if(age < 65 && age >= 18){
    console.log("Each month you get a salary");
} else if(age <18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

var day = "Sunday";
switch(day) {
    case "Monday" :
        console.log("Today is monday");
        break;
    case "Tuesday" :
        console.log("Today is tuesday");
        break;
    case "Wendnesday" :
        console.log("Today is wednesday");
        break;
    case "Thursday" :
        console.log("Today is thursday");
        break;  
    case "Friday" :
        console.log("Today is friday");
        break;
    case "Saturday" :
        console.log("Today is saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("There is no such day");
}
