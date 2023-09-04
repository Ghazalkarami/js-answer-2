// JS EXAMPLE ====>

// Q : Swap the values of variable :
// answer :

let x = 20;
let y = 40;
console.log("x=",x,"y=",y)
let temp;
temp = x;
x = y;
y = temp;
console.log("After swapping:")
console.log("x=",x,"y=",y)

// Q : write a function which returns the maximum of some number ...
// answer :

Math.max(48, 1485703, 3654 , 12 , 432579 , 111 );

// Q : write a function which checks given width and height , returns true (landscape) if width is greater than height and vice versa . 
// answer  :

function landscape(width , height){
  if (width>=300 && height>=200 && width > height ){
    return ('landscape is :'+ "" +  true )
  }
  else{
    return 'your size dont have correct value !'
  }
  
}

landscape(300,290)

// Q : Write a function which calcuate the sum of multiples of 3 and 5 for a given limit :
// Answer :

var sum = 0;
for (var m = 0; x < 55 ; x++)
{
    if (m % 3 === 0 || m % 5 === 0)
    {
       sum += m;
    }
}

// Q : Write a function which shows star(or any patterns) for the number of times and rows provided .
// answer : 

let str = ""

for ( i=1 ; i<=5 ; i++ ){
  for(j=1 ; j<=i ; j++ ){
    str+="*";
  }
  str+='\n'
}

// Q : Write a function which calcuate the sum of marks provided in an array , average it and also show grade . 
// answer :

const average = [12,23,54,14,18,20,22,90]
average.reduce((a,b)=>{return (a+b / average.length)})


// Q : create a method named  ' excludes ' which cut values from existing array and push to new array .
// answer :

let myArray = [ 'A' , 'B' , 23 , 45 , 34 , 'Ali'];
let ExcludeArr = myArray.slice(1,4)
let myArray2 = ['alireza',3,4,9,0,'sina','ali']
let all = [...ExcludeArr, ...myArray2 ]
console.log(all)


// Q : create a method named  ' includes ' which checks an element exists in an array . 
// answer : 

const product = [ 'pen' , 'bag' , 'mobile' , 'car' , 'laptop']
product.includes('bag')

// Q :  write a function to create a random number upto 75 :
// answer 12 :

function getRandomInt(max) {
  return Math.floor(Math.random() * 75);
}
getRandomInt()


// Q : write a function which show or print sum of arguments passed :
// answer :

function sum(...Argument) {
  let x = 0;
  for (const arg of Argument) {
    x += arg;
  }
  return x ;
}

sum(6,8,9)