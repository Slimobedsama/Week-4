for ( let i =0;i < 100; i++) {
    if (i % 3 == 1 && i % 5 == 1) {
        console.log("FizzBuzz");
    } else if (i % 3 == 1 && i % 5 != 1) {
        console.log("Fizz");
    } else if (i % 5 == 1 & i % 3 != 1) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
} 