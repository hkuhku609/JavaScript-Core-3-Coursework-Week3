# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

> variable scope different. The variable x on the line 4 is LOCAL variable in function f1() so console.log(x) on the line 5 will output 2. The variable x on the line is GLOBAL variable so console.log(x) on the line 7 will output 1.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

> console.log(f1()) output 10. console.log(y) output undefined because the y variable is in the function f1() so console.log(y) can't access it from outside of the function.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

> x=9,y={x:10} because x is global variable and f1's increment only in f1 so x still output 9. y is same from x but y is object that pass by reference so it will be {x:10}
