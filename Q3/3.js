// <!--Q.3 Problem statement 3: Write a JavaScript function that iterates through an array of integers. The function should evaluate each number in the array:
// 1. If the number is even, replace it with its square (n^2).
// 2. If the number is odd, the value should remain unchanged. -->

function transform(a)
{
    return a.map(n=>n%2==0?n*n:n);
}
console.log(transform([2,3,4,5,6]));