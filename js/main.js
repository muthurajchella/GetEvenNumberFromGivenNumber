let num = parseInt(prompt("Enter Your Number To Check sum of the Even No's "));
let sum = 0;

while(num !=0){
    let rem = num % 10;
    num = (num - rem)/10;
    if(rem%2 === 0){
        sum = sum + rem;
    }
};

console.log(`Sum of the Given Even Number : ${sum}`);
alert(`Sum of the Given Even Number : ${sum}`);