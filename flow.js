// Write a function that accepts an
//  array of strings and console.logs 
// each element using a for loop.
function data(array){
   
    for(let i=0;i<array.length;i++){
        console.log(arr[i]);
        
    }

}
let arr =["hello","gloria"];
data(arr);

// write a function that accept an array of
//  number and uses the for-each method to 
// console.log each number multiply by four
function number(array2){
    array2.forEach(element => {
        console.log(element*2)
    });
}
let num =[2,5,8,9,6,4]
number(num)
// Write a function that takes in an array of 
// numbers and consoles the first four items
//  multiplied by 8 and the last two added by 5.
//   Console the array with the new values

function multArray(arr) {
    const firstFour = arr.slice(0, 4).map(num => num * 8);
    const lastTwo = arr.slice(-2).map(num => num + 5);
    const multArray = [...firstFour, ...lastTwo];
    console.log(multArray);
  }
  const myArray = [1, 2, 3, 4, 5, 6];
  multArray(myArray);

// Write a function that takes in the following
//  array and use a while loop to iterate and break
//   when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
function num3(arr2){
    let i=0;
    while(i<arr2.length){
        if(i===4){
            break;
        }
        i++;
    }
    return i;
}
let arrNum = [1,2,3,4,5,6,7,8,9];
console.log(num3(arrNum));

// Write a function that takes in a an array 
// of strings and use a continue statement 
// when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruit(arr4){
     for(let i=0;i<arr4.length;i++){
    if(i===2){  
        continue;
    }
    console.log(arr4[i]);
     }
}
      let fruits= ['apple','plum','banana','strawberries','kiwi'];
       fruit(fruits);


