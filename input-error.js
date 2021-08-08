function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}
const firstTotal = add(63,71);
// console.log(firstTotal);
const secondTotal = add(43,96);
// console.log(secondTotal);

function multiply(num1,num2){
    console.log('Parameters',num1,num2);
    const result = num1 * num2;
    return result;
}
const firstResult = multiply(37,12);
console.log(firstResult);
const secondResult = multiply(12,9);