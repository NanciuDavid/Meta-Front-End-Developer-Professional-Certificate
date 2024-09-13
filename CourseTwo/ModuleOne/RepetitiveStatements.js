for (var i = 1; i <= 5; i++) {
    console.log(i);
};
console.log('Counting completed!');

for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown finished!');

var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');

var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
};
console.log('Counting completed!');


var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};


for (var i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Gold medal")
    } else if (i == 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else {
        //this block will run if no condition matches
        console.log(i)
    }
}


for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}



  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}
