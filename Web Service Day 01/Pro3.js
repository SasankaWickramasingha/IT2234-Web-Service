//Print the numbers from 1 to 10
console.log("Print the numbers from 1 to 10")
for(let i = 1; i <= 10; i++)
{
	console.log(i);
}

//print only odd numbers
console.log("Print only odd numbers")
for(let i = 0; i <= 10; i++)
{
	if(i % 2 != 0)
	{
		console.log(i);
	}
}

//Print the numbers in reverse order
console.log("Print the numbers in reverse order")
for(let i = 10; i >= 1; i--)
{
	console.log(i);
}

//Reverse numbers in left & right
console.log("Reverse numbers in left & right")
let i = 15
let mid = parseInt(i/2) + 1;


for(let j = mid - 1; j > 0; j--)
{
	console.log(j)
}

console.log(mid);

for(let j = i; j > mid; j--)
{
	console.log(j)
}