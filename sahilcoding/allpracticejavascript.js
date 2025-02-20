// function............


// function a(b,c){

// d=b+c;
// console.log(d)
// }
// a(15,400);



//arrow function..............................................


// let myFunction = () => {
// alert("hey sahil");
// }

// myFunction();


//Object.......................................................

// let a={
//     name:"sahil",
//     age:19,
// }
// console.log(a.name);
// console.log(a.age);
// console.log(typeof a);




//  let a=document.getElementById('demo');

//  let btn=document.querySelector(".button");

//  btn.addEventListener("click",function(){

// a.style.backgroundColor="yellow";

//  })


// let btns=document.createElement("button");
// btns.innerHTML="hey";


// // console.log(btns);


// object method....................................................

// let a={
//         name:"sahil",
//     age:"59 years",
// arr:[{
// names: "ajay"},
// {ages:19
// }]
// }
// console.log(a.arr[0].names);


// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

//  console.log(new Person("Sahil", 22, "Delhi"));



// using switch case create a calculator .....................................

// let day =parseInt(prompt("enter the no")) ;
// let days =parseInt(prompt("enter the no")) ;
// let ope=prompt("enter +,-,*,/");
// switch (ope) {
//     case "+":
//         console.log(`${day+days}`);
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     default:
//         console.log("Weekend or Invalid Day");
// }

// immediate invoked function...........................................

// (function (name) {
//     console.log( ` hey ${name}`);

// })("sahilboss");



// type of function..........................................................

// 1. Regular Function...........................

// function greet(name) {
//     return `Hello ${name}`;
//   }
//   console.log(greet("sahil"));


//   // 2. Arrow Function (ES6)....................

//   const add = (a, b) => a + b;

//   // 3. IIFE (Immediately Invoked).........................

//   (function() {
//     console.log("Runs immediately");
//   })();

// using setinterval and clearinterval to generate random color.............................................................................

// function changecolor() {
//     const hex = "0123456789ABCDEF";
//     let colors = "#";
//     for (let i = 0; i < 6; i++) {
//         colors += hex[Math.floor(Math.random() * 16)];

//     }
//     return colors;
// };

// let inter;
// function start() {
//     inter = setInterval(changecolorfun, 1000);

//     function changecolorfun() {
//         document.body.style.backgroundColor = changecolor();
//     }
//     console.log("start");

// };

// function stop() {
//     clearInterval(inter);
//     console.log("stop");
// };


//..............................................................................................................................................

//API call and fetch Data................................................................

// async function fetchData() {
//     let response = await fetch("https://cat-fact.herokuapp.com/facts");
//     let data = await response.json();
//     console.log(data[0].text);
// }
// fetchData();

//...........................................................................................................................................................


// function addClass() {
//     let text = document.getElementById("myText");
//     text.classList.add("highlight");.........................css  class highlight add karta hai..........................
// }

// function removeClass() {
//     let text = document.getElementById("myText");
//     text.classList.remove("highlight");
// }



// function checkClass() {
//     let text = document.getElementById("myText");
//     if (text.classList.contains("highlight")) {
//         alert("Class मौजूद है!");
//     } else {
//         alert("Class मौजूद नहीं है!");
//     }
// }


