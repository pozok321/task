function factorial(i){
    //base case
    if(i == 0 || i == 1){
        return 1;
    //recursive case
    }else{
        return i * factorial(i-1);
    }
}
let i = 4;
let answer = factorial(i)
console.log("The factorial of " + i + " is " + answer);