# IT2234 Web Services

This repository contains fundamental JavaScript programs demonstrating basic programming concepts such as printing output, arithmetic operations, and loops.

## Contents

1. **Hello World** - A simple program to print "Hello World" to the console.
2. **Arithmetic Operations** - Demonstrates addition, subtraction, multiplication, and division.
3. **Looping Constructs** - Uses loops to print numbers, odd numbers, and sequences in reverse order.

## How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/SasankaWickramasingha/IT2234-Web-Service.git
   cd IT2234-Web-Services
   ```
2. Open the files in a code editor.
3. Run each JavaScript file using Node.js:
   ```sh
   node filename.js
   ```

## Code Descriptions

### 1. Hello World
This program prints "Hello World" to the console.
```js
console.log("Hello world!");
```
**Output:**
```
Hello world!
```

### 2. Arithmetic Operations
Performs basic arithmetic calculations using two numbers.
```js
let a = 20;
let b = 10;
let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

console.log("Sum: " + sum);
console.log("Sub: " + sub);
console.log("Mul: " + mul);
console.log("Div: " + div);
```
**Output:**
```
Sum: 30
Sub: 10
Mul: 200
Div: 2
```

### 3. Looping Constructs
This script demonstrates different looping techniques.

- **Print numbers from 1 to 10:**
```js
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
```
**Output:**
```
1
2
3
...
10
```

- **Print only odd numbers:**
```js
for(let i = 0; i <= 10; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}
```
**Output:**
```
1
3
5
7
9
```

- **Print numbers in reverse order:**
```js
for(let i = 10; i >= 1; i--) {
    console.log(i);
}
```
**Output:**
```
10
9
8
...
1
```

- **Reverse numbers in left & right:**
```js
let i = 15;
let mid = parseInt(i/2) + 1;

for(let j = mid - 1; j > 0; j--) {
    console.log(j);
}

console.log(mid);

for(let j = i; j > mid; j--) {
    console.log(j);
}
```

## Author
SasankaWickramasingha

## License
This project is open-source. You can modify and distribute it freely.
