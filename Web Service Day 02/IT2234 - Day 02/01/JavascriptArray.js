let arr1 = [50, 4, 10, 2]
console.log(arr1)

//for loop method
console.log("For loop method")
for(let a = 0; a < arr1.length; a++){
    console.log(arr1[a]);
}

//for each method
console.log("For each loop")
arr1.forEach((n) => {
    console.log(n)
});

//print the largest number in the arr1ay
console.log("Largest element in the array")
let max = arr1[0];
arr1.forEach((n) => {
    (max < n) && (max = n)
})
console.log(max)

//Print the nested arr1ay
console.log("Nested array")
let arr2 = [[1, 2, 30], [5, 6], [8, 5, 3]]
arr2.forEach((n) =>{
    n.forEach((i) =>{
        console.log(i)
    })
})

//Exercise 01
//arr3 = [1, 2, 3, 4, 5, 6]
//Target = 7
//Write a code to find all the pairs that sum up to the target
console.log("Exercise 01")
let arr3 = [1, 2, 3, 4, 5, 6]
let target = 7
for(let a = 0; a < arr3.length; a++){
    for(let b = 1; b < arr3.length; b++){
        if(arr3[a] + arr3[b] == target){
            console.log(arr3[a] , arr3[b])
        }
    }
}

//Exercise 02
//a = [4, 5, 6, 3, 7]
//b = [8, 3, 2, 1, 5]
//Find the common elements between a & b
console.log("Exercise 02");

let a = [4, 5, 6, 3, 7];
let b = [8, 3, 2, 1, 5];

let common = [];

a.forEach((n) => {
    b.forEach((m) => {
        if (n === m) {
            common.push(n);
        }
    });
});

common.forEach((n) => {
    console.log(n);
});


//Eexercise 03
//c = [4, 8, 3, 4, 3, 2, 1, 8, 4]
//Find the most frequent element in the array
let c = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let maxCount = 0;
let mostFrequentElement;

for (let i = 0; i < c.length; i++) {
    let count = 0;

    for (let j = 0; j < c.length; j++) {
        if (c[i] === c[j]) {
            count++;
        }
    }

    if (count > maxCount) {
        maxCount = count;
        mostFrequentElement = c[i];
    }
}
console.log("Most frequent element:", mostFrequentElement);


//Array Operations(push & pop)
console.log("Array Operations")
d = ['a', 'b', 'd']
//push
d.push('e')
console.log("Push")
console.log(d)
//pop
d.pop()
console.log("Pop")
console.log(d)

//Exercise 04
//Reverse the array using push & pop
// a b c d -> d c b a
console.log("Exercise 04")
e = ['a', 'b', 'c', 'd']
f = []
e.forEach((n) => {
    f.push(e.pop())
})
console.log(f)
