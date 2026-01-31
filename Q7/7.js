// Problem statement 7: Write a JavaScript function that creates a counter using closure. 1.Initial counter value should be 0 2.Each time increment() is called, the value should increase by 1 3. The counter value must not be accessible directly 4.The value should be preserved between function calls.


function counter()
{
    let c = 0;
    return function()
    {
        c++;
        return c;
    }
}

const inc = counter();
console.log(inc());
console.log(inc());
