// ============== 1º ==============

// console.log('Pindorama');
// window.alert ('Vc morreu!');

// document.getElementById("myH1").textContent = 'EXPLOSION';
// document.getElementById("myP").textContent = 'banido';

// ============== 2º ==============

// let age = 25;
// let price = 10.99;
// let online = true;


// console.log(`You are ${age} years old, and have $${price} in your pocket`);

// ============== 3º ==============

// let username;

// username = window.prompt("whats's your username?");

// console.log(username)

// ============== 4º ==============

// let username;

// document.getElementById("mySubmit").onclick = function (){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }

// ============== 5º ==============

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// // Function to convert the variable types

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// ============== 6º ==============

// const pi = 3.14159;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * pi * radius;
//     document.getElementById("myH3").textContent = circumference + "cm";

// }

// ============== 7º ==============

// let x = 3.21;
// let y = 2;
// let z;

// // Rounds the number
// Math.round(x);
// // Rounds the number down
// Math.floor(x);
// // Rounds the number up
// Math.ceil(x);
// // Trunc the number
// Math.trunc(x);
// // Powers a number
// Math.pow(x,y);
// // Square root of a number
// Math.sqrt(x);
// // Log of a number
// Math.log(x);

// //Trigonometry shit
// Math.sin(x);
// Math.cos(x);
// Math.tan(x);

// // Absolute value is the positive number
// Math.abs(x);

// // Displays the highest/lowest number of the three
// let max = Math.max(x,y,z);
// let min = Math.min(x,y,z);

// ============== 8º ==============

// const myBtn = document.getElementById("myBtn");
// const myLabel1 = document.getElementById("label1");
// const myLabel2 = document.getElementById("label2");
// const myLabel3 = document.getElementById("label3");

// const min = 1;
// const max = 6;

// let randomNum1;
// let randomNum2;
// let randomNum3;

// myBtn.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     myLabel1.textContent = randomNum1;
//     myLabel2.textContent = randomNum2;
//     myLabel3.textContent = randomNum3;
// }

// ============== 9º ==============


// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const result = document.getElementById("result");
// let age;

// mySubmit.onclick = function(){

//     age = myText.value;
//     age = Number(age);

//     if(age >= 100){
//         result.textContent = ` ${age}? You are TOO OLD, you should not be alive by now.`
//     }
//     else if(age == 0) {
//         result.textContent = `${age}? You are a WRINKLED KNEE, you were just born.`
//     }
//     else if(age >= 18) {
//         result.textContent = `You officially can go to Jail for doing stupid things`
//     }
//     else if(age < 0) {
//         result.textContent = `${age}? You are drinking too much coca-cola, you're dying bro`
//     }else{
//         result.textContent = `${age}? This place is not for toddlers like you.`
//     }

// }

// ============== 10º ==============


// const myCheck = document.getElementById("myCheck");
// const redBtn = document.getElementById("redBtn");
// const greenBtn = document.getElementById("greenBtn");
// const blueBtn = document.getElementById("blueBtn");
// const mySubmit = document.getElementById("mySubmit");
// const laughResult = document.getElementById("laughResult");
// const colorResult = document.getElementById("colorResult");

// mySubmit.onclick = function(){

//     if(myCheck.checked){
//         laughResult.textContent = `So do I! HAHAHAHAHAHAHHAHAHAHAHAHAHA`
//     }else{
//         laughResult.textContent = `Why not?`
//     }

//     if(redBtn.checked){
//         colorResult.classList.remove('.g');
//         colorResult.classList.remove('.b');
//         colorResult.classList.add("r");
//         colorResult.textContent = `Hemoglobin is Red`;
//     }
//     else if(greenBtn.checked){
//         colorResult.classList.remove('.r');
//         colorResult.classList.remove('.b');
//         colorResult.classList.add("g");
//         colorResult.textContent = `Radioactive waste glows Green`;
//     }
//     else if(blueBtn.checked){
//         colorResult.classList.remove('.g');
//         colorResult.classList.remove('.r');
//         colorResult.classList.add("b");
//         colorResult.textContent = `Jinbei is Blue`;
//     }
//     else{
//         colorResult.textContent = `Why did you not choose a color?`;
//     }
// }


// ============== 11º ==============

// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";

// // same as

// if(age >= 18){
//     message = "You're an adult";
// }else{
//     message = "You're a minor";
// }

// let isStudent = true;
// let message = isStudent ? "You're a student" : "You're NOT a student";

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount *(discount/100)}`)

// ============== 11º ==============

// let testScore = 92;
// let letterGrades

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//     default:
//         letterGrade = "F";
// }

// ============== 11º ==============

// let userName = "Bola Agora"

// // Get the character in the determined position
// console.log(userName.chartAt(0));

// //Return the index of the FIRST occurance of the letter
// console.log(userName.indexOf("o"));

// // Return the index of the LAST occurance of the letter
// console.log(userName.lastIndexOf("o"));

// // Return the amount of characters in a string
// console.log(userName.length);

// // Trims all the useless spaces
// userName = userName.trim();

// // Turns into upper case
// userName = userName.toUpperCase();

// // Turns into lower case
// userName = userName.toLowerCase();

// // Repeats the string the amount of times choosen
// userName = userName.repeat(4159);

// // Returns true/false based on first/last letter choosen
// userName.startsWith("B")
// userName.endsWith("a")

// // Checks if the character is inlcuse in the string
// userName.includes(" ")

// // Will replace the first character with the second
// userName.replaceAll("o","i")

// //Increase the amount of character at the begining/end of the string using "0" to achieve this
// userName.padStart(15,"0")
// userName.padEnd(15,"0")

// ============== 12º ==============

// const fullName = "Azure Rathalos";

// // let firstName = fullName.slice(0, 5);
// // let lastName = fullName.slice(6, 15);

// let firstName = fullName .slice(0 , fullName.indexOf(" "));
// let lastName = fullName .slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

// const email = "bingus@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);


// console.log(username);
// console.log(extension);

// ============== 13º ==============

// let username = window.prompt("Enter your username: ")

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

// // ----------- CHAINING -----------

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// ============== 14º ==============

// AND = &&
// OR = ||
// NOT = !
// STRICT = === COMPARE THE VALUE AND DATATYPE
// DIFFERENT = !=
// STRICT DIFFERENCE = !==

// ============== 15º ==============

// // let username;

// // do{
// //     username = window.promt(`Enter your name`);
// // }while(username === "" || username === null)

// // console.log(`Sup ${username}`);


// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt(`Enter your username: `);
//     username = window.prompt(`Enter your password: `);

//     if(username === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log ("You are logged in");
//     }
//     else{
//         console.log("Invalid credentials. Try again");
//     }
// }

// ============== 16º ==============

// for(let i = 1; i <= 20; i++){

//     if(i == 13){
//         continue;
//     }
//     else{
//         console.log(i);
//     }

// }

// ============== 17º ==============

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

// let attempts = 0;
// let guess;
// let running = true;

// while(running){

//     guess = window.prompt(`Guess a number betwees ${minNum} - ${maxNum}`);
//     guess = Number(guess);

//     if(isNaN(guess)){

//         window.alert("Please enter a valid number!");

//     }
//     else if(guess < minNum || guess > maxNum){

//         window.alert("Please enter a valid number!");

//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert("TOO LOW! TRY AGAIN");
//         }
//         else if(guess > answer){
//             window.alert("TOO HIGH! TRY AGAIN");
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
//             running = false;
//         }
//     }


// }

// ============== 18º ==============

// // function HB(userName, age){
// //     console.log(`Happy birthday ${userName}!`);
// //     console.log(`You are ${age} yo!`);
// // }

// // HB("LuL", 4562);

// function add(x, y){
//     let result = x + y;
//     return result;
// }

// function subt(x, y){
//     let result = x - y;
//     return result;
// }

// function times(x, y){
//     let result = x * y;
//     return result;
// }

// function div(x, y){
//     let result = x / y;
//     return result;
// }

// function isEven(num){
//     return num % 2 === 0 ? true : false;
// }

// function isValid(email){

//     return email.includes('@') ? true : false;

// }

// console.log(isValid("nsei@nada.com"));
// console.log(isValid("seiTudo.com"));



// console.log(add(2, 3));

// ============== 19º ==============

// let fruits = ["apple", "bergamot", "nabana"];

// // // Adds the elment to the end of the array
// // fruits.push("queso");
// // // Remove the last element of the array
// // fruits.pop();
// // // Adds an element ot the beggining of the array
// // fruits.unshift("ma mengo");
// // // Moves an element to the beggining of the array
// // fruits.shift("bergamot");

// // let numOfFruits = fruits.length;
// // // Shows the position of an alement in the array
// // let index = fruits.indexOf("apple");

// // Shows the array list in alphabetic order, adding .reverse() =, obviously reverse the array
// fruits.sort();

// for(let fruit of fruits){
//     console.log(fruit);
// }

// console.log(numOfFruits);

// ============== 20º ==============

// let fruits = ["samsung", "purple","ma mango","nanaba"];
// let vegetables = ["green beans", "potatos", "tomatoes"];

// let foods = [...fruits, ...vegetables, "eggs", "booba"];

// console.log(foods);

// ============== 21º ==============

// // const food1 = "pizza";
// // const food2 = "borguir";
// // const food3 = "winers";
// // const food4 = "choux cream";
// // const food5 = "worcestershire sauce"

// // function openFridge(...foods){
// //     console.log(...foods);
// // }

// // function getFood(...foods){
// //     return foods;
// // }

// // // openFridge(food1, food2, food3, food4, food5,)

// // const foods = getFood(food1, food2, food3, food4, food5);

// // function sum (...numbers){
// //     let result = 0;
// //     for (let number of numbers){
// //         result += number;
// //     }

// //     return result;
// // }

// // // const total = sum(1);

// // // console.log(`Your total is $${total}`);

// // function getAverage (...numbers){
// //     let result = 0;
// //     for (let number of numbers){
// //         result += number;
// //     }

// //     return result/numbers.length;
// // }

// // const total = getAverage(75, 100, 85, 90, 50);

// function combineStrings(...strings){
//     return strings.join(" ");
// }

// const fullName = combineStrings("Mr.", "Mxyzptlk", "Garcia", "XV", );

// ============== 22º ==============

// function generatePassword (length, includeLowerCase, includeNumbers, includeUpperCase, includeSymbols) {

//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()-_=+";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowerCase ? lowercaseChars : "";
//     allowedChars += includeUpperCase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     if (length <= 0) {
//         return `(password length must be at least 1)`;
//     }

//     if (allowedChars.length === 0) {
//         return `At least 1 set of characters needs to be selected`;
//     }

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }

//     return password;

// }

// const passwordLength = 10;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength,
//                                   includeLowerCase,
//                                   includeNumbers,
//                                   includeUpperCase,
//                                   includeSymbols);

// console.log(`Generated Password: ${password}`);

// ============== 23º ==============

// hello(goodbye);

// function hello(){
//     console.log("SuP!");
//     callback();
// }

// function leave(){
//     console.log("GTFO!");
// }

// function goodbye(){
//     console.log("See YA!");
// }

// sum(displayConsole, 1, 2);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result) {
//     console.log(result);
// }

// function displayPage(){
//     document.getElementById("myH1").textContent = result;
// }

// ============== 24º ==============

// // let numbers = [1, 2, 3, 4, 5];

// // numbers.forEach(display);

// // function double (element, index, array){
// //     array[index] = element * 2;
// // }

// // function triple (element, index, array){
// //     array[index] = element * 3;
// // }

// // function square (element, index, array){
// //     array[index] = Math.pow(element, 2);
// // }

// // function cube (element, index, array){
// //     array[index] = Math.pow(element, 3);
// // }

// // function display(element) {
// //     console.log(element)
// // }

// let fruits = ["nokia", "toomuch", "nikokado Avocado", "pastel"];

// fruits.forEach(upperCase);
// fruits.forEach(display);


// function display(element) {
//     console.log(element);
// }

// function lowerCase(element, i, array) {
//     array[i] = element.toLowerCase();
// }

// function capitalize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function upperCase(element, i, array) {
//     array[i] = element.toUpperCase();
// }

// ============== 25º ==============

// const num = [1,2,3,4,5];
// const square = num.map(square);
// const cubes = num.map(cube);


// console.log(cubes);

// function square (element) {
//     return Math.pow(element, 2);
// }

// function cube (element) {
//     return Math.pow(element, 3);
// }

// const students = ["Tsuna" , "Gokudera" , "Yamamoto", "Hyohei", "Hibari"];
// const studentUpper = students.map(upperCase);

// console.log(studentUpper)

// function upperCase(element) {
//     return element.toUpperCase();
// }

// function lowerCase(element) {
//     return element.toLowerCase();
// }

// const dates = ["2001-9-11", "2001-9-10" , "2002-2-22"];
// const formattedDates = dates.map(fromatDates);

// function formatDates(element) {
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}/`;
// }

// ============== 26º ==============

// let num = [1,2,3,4,5,6,7,8,9];
// let evenNum = num.filter(isEven);
// let oddNum = num.filter(isOdd);

// function isEven(element) {
//     return element % 2 === 0;
// }

// function isOdd(element) {
//     return element % 2 !== 0;
// }

// const ages = [16, 17, 18, 18, 19, 20, 600];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);

// console.log(adults)

// function isAdult(element) {
//     return element >= 18;
// }

// function isChild(element) {
//     return element < 18;
// }

// const words = ["uranium", "hotdog", "savegnago", "covabra", "kiwi", "seta", "pareidolia", "phosponetic"]
// const shortWords = words.filter(getShortWords);
// const longWords = words.filter(getLongWords);

// console.log(longWords);

// function getShortWords(element) {
//     return element.length <= 7;
// }

// function getLongWords(element) {
//     return element.length > 7;
// }

// ============== 27º ==============

// const prices = [5,48,6,51,653,4];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element) {
//     return accumulator + element;
// }

// const grades = [57, 95, 64, 79, 25, 54];

// const max = grades.reduce(getMax);
// const min = grades.reduce(getMin);

// function getMax(accumulator, element) {
//     return Math.max(accumulator, element);
// }

// function getMin(accumulator, element) {
//     return Math.min(accumulator, element);
// }

// ============== 28º ==============

// const num = [1,2,3,4,5,6];
// const square = num.map(
//   function (elment){
//     return Math.pow(element,2);
// });

// const cube = num.map(
//   function (elment){
//     return Math.pow(element,3);
//   }
// );

// const isEven = num.filter(
//   function (element){
//     return element % 2 === 0;
//   }
// );

// const isOdd = num.filter(
//   function (element) {
//     return element % 2 !== 0;
//   }
// );

// const total = num.reduce(
//   function (accumulator, element){
//     return accumulator + element;
//   }
// );


// console.log(square);

// ============== 29º ==============

// // const hello = (name, age) => {console.log(`Sup, ${name}`)
// //                               console.log(`Bro is ${age}`)}

// // hello("Gyat", 2321);

// const num = [1,2,3,4,5,6];
// const square = num.map((element) => Math.pow(element,2));
// const cube = num.map((element) => Math.pow(element,3));
// const isEven = num.filter((element) => element % 2 === 0);
// const isOdd = num.filter((element) => element % 2 !== 0);
// const total = num.reduce((accumulator,element) => accumulator + element);

// ============== 30º ==============

// const person1 = {
//   firstName: "Itadori",
//   lastName: "Yuji",
//   age: 17,
//   isDead: false,
//   saySpecialz: () => {console.log("You are my SPECIAL, We are SPECIALz")},
// }

// const person2 = {
//   firstName: "Nobara",
//   lastName: "Kugisaki",
//   age: 17,
//   isDead: true,
// }

// console.log(person1.saySpecialz);
// console.log(person2.isDead);

// ============== 31º ==============

// const person1 = {
//   name: "Garfield",
//   favFood: "Lasagna",
//   sayCringe: function() {console.log(`- Hey John, ${this.favFood} please`)},
//   eat: function(){console.log(`${this.name} eats the whole 32kg of ${this.favFood}`)}
// }

// const person2 = {
//   name: "Michaelangelo",
//   favFood: "Pizza",
//   sayCringe: function(){console.log(`- Raph, gimme that ${this.favFood}, I'm starving right now!`)},
//   eat: function(){console.log(`${this.name} eats just 320 slices of ${this.favFood}`)}
// }

// ============== 32º ==============

// function Car(make,model,year,color){
//   this.make = make,
//   this.model = model,
//   this.year = year,
//   this.color = color,
//   this.drive = function () { `You hugged a tree with a ${this.model}` }
// }

// const car1 = new Car("Ford", "Mustang", 2024, "Negro");
// const car2 = new Car("Chrevolet", "Camaro", 2025, "Azulblueblue");
// const car3 = new Car("Dodge", "Charger", 2026, "Silver Surfer");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);

// ============== 33º ==============

// class Product{
//   constructor(name,price){
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct(){
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: ${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax){
//     return this.price + (this.price*salesTax)
//   }
// }

// const prod1 = new Product("Shirt", 19.99);
// const prod2 = new Product("Pants", 22.59);
// const prod3 = new Product("Underwear", 999.99);

// prod1.displayProduct();

// const total = prod1.calculateTotal(salesTax);
// console.log(`Total price (with tax) $${total}`);

// ============== 34º ==============

// // class MathUtil{
// //   static Pi = 3.14159;

// //   static getDiameter(radius){
// //     return radius*2;
// //   }

// //   static getCircumference(radius){
// //     return 2 * this.Pi * radius;
// //   }

// //   static getArea(radius){
// //     return this.Pi * radius * radius;
// //   }
// // }

// class User{
//   static userCount = 0;

//   constructor(username){
//     this.username = username;
//     User.userCount++;
//   }

// }


// const user1 = new User("Demencia");

// console.log(user1.username);
// console.log(User.userCount);

// ============== 34º ==============

// class Animal{
//   alive = true;

//   eat(){
//     console.log(`This ${this.name} is eating`);
//     console.log(`This ${this.name} is taking a dump`);
//   }
//   sleep(){
//     console.log(`This ${this.name} is ZZZZZZZZZZ`)
//   }
// }

// class Rabbit extends Animal{
//   name = "rabbit";

//   run(){
//     console.log(`This ${this.name} is runniag at 23801km/s`)
//   }
// }

// class Fish extends Animal{
//   name = "fish";
// }

// class Hawk extends Animal{
//   name = "hawk";
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(hawk);
// hawk.eat();
// hawk.sleep();
// hawk.run();

// ============== 35º ==============


// class Animal{
//   alive = true;

//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }

//   move(){
//     console.log(`The ${this.name} moves at a speed of ${speed}km/h`)
//   }
// }

// class Rabbit extends Animal{
//   constructor(name, age, runSpeed ){
//     super(name,age);
//     this.runSpeed = runSpeed;
//   }
// }

// class Fish extends Animal{
//   constructor(name, age, swimSpeed){
//     super(name,age);
//     this.swimSpeed = swimSpeed;
//   }
// }

// class Hawk extends Animal{
//   constructor(name, age, flySpeed){
//     super(name,age);
//     this.flySpeed = flySpeed;
//   }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 231, 25);
// const hawk = new Hawk("hawk", 0.3, 1820);

// ============== 35º ==============

// // class Rectangle{
// //   constructor(width,height){
// //     this.width = width;
// //     this.height = height;
// //   }

// //   set width(newWidth){
// //     if(newWidth > 0){
// //       this._width = newWidth;
// //     }
// //     else{
// //       console.error("Width must be positive");
// //     }
// //   }

// //   set height(newHeight){
// //     if(newHeight > 0){
// //       this._height = newHeight;
// //     }
// //     else{
// //       console.error("Height must be positive");
// //     }
// //   }

// //   get width(){
// //     return `${this._width.toFixed(1)}cm`;
// //   }

// //   get height(){
// //     return `${this._height.toFixed(1)}cm`;
// //   }

// //   get area(){
// //     return `${(this._width * this._height).toFixed(1)}cm²`;
// //   }
// // }

// // const rect = new Rectangle()

// class Person {
//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newFirstName){
//     if(typeof newFirstName == "string" && newFirstName.length > 0){
//       this._firstName = newFirstName;
//     }
//     else{
//       console.error("First name must be a non-empty string");
//     }
//   }

//   set lastName(newLastName){
//     if(typeof newLastName == "string" && newLastName.length > 0){
//       this._lastName = newLastName;
//     }
//     else{
//       console.error("Last name must be a non-empty string");
//     }
//   }

//   set age(newAge){
//     if(typeof newAge === "number" && newAge >= 0){
//       this._age = newAge;
//     }
//     else{
//       console.error("Age must be a non-negative number");
//     }
//   }

//   get firstName(){
//     return this._firstName;
//   }

//   get lastName(){
//     return this._lastName;
//   }

//   get fullName(){
//     return this._firstName + this._lastName;
//   }
// }

// const person = new Person("Larry","Lobster", 30292);

// ============== 36º ==============

// let a = 1;
// let b = 2;

// [a,b] = [b,a];

// const colors = ["red", "green" , "blue", "black", "white"];

// // [colors[0], colors[4]] = [colors[3], colors[0]];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// const person1 = {
//   firstName: "Loli",
//   lastName: "Bisteca",
//   age: 48513,
//   job: "Streamer",
// }

// const person2 = {
//   firstName: "Eita",
//   lastName: "Bixo",
//   age: 69,
// }

// const{firstName, lastName, age, job} = person1;

// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(job)


// function displayPerson({firstName, lastName, age, job}) {
//   console.log(`name:${firstName} ${lastName}`);
//   console.log(`age: ${age}`);
//   console.log(`job: ${job}`);

// }

// const person1 = {
//   firstName: "Loli",
//   lastName: "Bisteca",
//   age: 48513,
//   job: "Streamer",
// }

// const person2 = {
//   firstName: "Eita",
//   lastName: "Bixo",
//   age: 69,
// }


// ============== 37º ==============

// // const Person = {
// //   fullName: "McLovin",
// //   age: 21,
// //   isStudent: true,
// //   hobbies: ["drinking", "nerding"],
// //   address:{
// //     street: "892 Momona St.",
// //     city: "Honolulu",
// //     country: "Hawaii"
// //   }
// // }

// // for (const property in person.address) {
// //   console.log(person.address[property]);

// // }

// // console.log(person.fullName);
// // console.log(person.age);
// // console.log(person.isStudent);
// // console.log(person.hobbies[0]);
// // console.log(person.address.country);

// class Person{
//   constructor(name, age, ...adress){
//     this.name = name;
//     this.age = age;
//     this.adress = new Adress(...adress);
//   }
// }

// class Adress{
//   constructor(street,city,country){
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }

// const person1 = new Person("McLovin", 21, "892 Momona St.", "Honolulu", "Hawaii");

// const person2 = new Person("Mc&Chesse", 2, "741 Cheddar Av.", "Great Pecorino", "Parmaggio");

// const person3 = new Person("Lorax", 49, "157 Ovethere St.", "Somewhere", "Righthere");

// console.log(person1.adress.street);
// console.log(person2.address.city);
// console.log(person3.adress.country);

// ============== 38º ==============

// const fruits = [{name: "apple",color: "red", calories: 95},
//                 {name: "orange",color: "orange", calories: 45},
//                 {name: "banana",color: "yellow", calories: 105},
//                 {name: "coconut",color: "white", calories: 159},
//                 {name: "pinapple",color: "yellow", calories: 37}]

// fruits.push({name: "grapes",color: "purple", calories: 62});

// fruits.pop();

// fruits.splice(1,2);

// fruits.forEach(fruit => console.log(fruit.name));


// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.Colors);

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);

// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

// const minFruit = fruits.reduce((min, fruit) => fruit.calories > min.calories ? fruit : min);

// ============== 39º ==============

// const people = [{name: "Spongebob", age: 30, gpa:3.0},
//                 {name: "Patrick", age: 37, gpa:1.0},
//                 {name: "Squidward", age: 51, gpa:2.5},
//                 {name: "Sandy", age: 27, gpa:4.0},]

// people.sort((a,b) => a.age - b.age);

// people.sort((a,b) => a.name.localeCompare(b.name));

// console.log(people);

// ============== 40º ==============

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// shuffle(cards);

// // cards.sort(() => Math.random() - 0.5);

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {i
//     const random = Math.floor(Math.random() * (i + 1));

//     [array[i], array[random] = array[random], array[i]];
//   }
// }

// ============== 41º ==============

// const date = new Date(0);

// // const year = date.getFullYear();
// // const month = date.getMonth();
// // const day = date.getDate();
// // const minutes = date.getMinutes();
// // const seconds = date.getSeconds();
// // const dayOfWeek = date.getDay();


// const date1 = new Date ("2023-12-31");
// const date2 = new Date ("2024-01-01");

// if(date2 > date1){
//   console.log("HAAPY NEW YEAR!");
// }

// ============== 42º ==============

// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`Counter: ${count}`)
//   }

//   function getCount() {
//     return count;
//   }

//   return {increment};
// }

// const counter = createCounter();

// function createGame() {
//     let score = 0;

//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points}pts`)
//   }

//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points}pts`)
//   }

//   function getScore(){
//     return score;
//   }

//   return {increaseScore, decreaseScore, getScore}
// }


// const game = createGame();

// ============== 43º ==============

// let timeOutId;

// function startTimer() {
//   timeOutId =setTimeout(() => window.alert("salamili"),3000);
//   console.log("STARTED");
// }

// function clearTimer() {
//   clearTimeout(timeOutId);
//   console.log("CLEARED");
// }

// ============== 44º ==============

// import {PI,getCircumference,getArea,getVolume} from './mathUtil';

// console.log(PI);
// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm²`);
// console.log(`${volume.toFixed(2)}cm³`);

// ============== 45º ==============

// function func1(callback) {

//     setTimeout(() => {console.log("Task 1");
//                       callback()}, 3000)

// }

// function func2() {

//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");

// }

// func1(func2);

// ============== 46º ==============

// try {

//     const dividend = window.prompt("Enter a dividend");
//     const divisor = window.prompt("Enter a divisor");

//     if (divisor == 0) {
//         throw new Error("You can't divide by zero, idiot");
//     }

//     if (isNaN(dividend) || isNaN(divisor)) {
//         throw new Error("Values must be a number");
//     }

//     const result = dividend / divisor;
//     console.log(result);

// } catch (error) {
//     console.error(error);
// }

// console.log("You have reached the end!")

// ============== 47º ==============

// const username = "Bingus";
// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? `Guest` : username;

// ============== 48º ==============

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "red";
// myHeading.style.color = "#fff";


// const fruits = document.getElementsByClassName("fruits");

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "Yellow";
// });

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// Array.from (h4Elements).forEach(h4Elements => {
//     h4Elements.style.backgroundColor = "yellow";
// });

// Array.from (liElements).forEach(liElements => {
//     liElements.style.backgroundColor = "#a0469d";
//     liElements.style.color = "#fff";
// });

// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "lightGreen";

// const foods = document.querySelectorAll("li");
// foods[0].style.backgroundColor = "red";

// foods.forEach(food => {
//     food.style.backgroundColor = "orange";
// })

// ============== 49º ==============

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "salmon";


// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElements => {
//     const firstChild = ulElements.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })


// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "lightBlue"

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElements =>{
//     const lastChild = ulElements.lastElementChild;
//     lastChild.style.backgroundColor = "lightblue";
// });

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "lightGreen";

// const element = document.getElementById("orange");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "blueViolet"

// const element = document.getElementById("iceCream");
// const parent = element.parentElement;
// parent.style.backgroundColor = "tan";

// const element = document.getElementById("vegetables");
// const children = element.children;

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "thistle"
// })

// children[1].style.backgroundColor = "thistle";

// ============== 50º ==============

// const newH1 = document.createElement("h1");

// newH1.textContent = "I like Pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.textAlign = "center";

// // document.body.prepend(newH1);
// // document.getElementById("box2").append(newH1);
// // document.getElementById("box2").prepend(newH1);

// // const box2 = document.getElementById("box2");
// // document.body.insertBefore(newH1,box3);

// // IN CASE OF NOT HAVING AN ID:

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1, boxes[1]);

// // REMOVE HTML ELEMENT

// // document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);

// const newListItem = document.createElement("li");

// newListItem.textContent = "coconut";
// newListItem.id = "coconut"
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";
// newListItem.style.listStyle = "none";

// // document.body.append(newListItem);
// // document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// // document.getElementById("fruits").prepend(newListItem);

// // const kiwi = document.getElementById("kiwi");
// // document.getElementById("fruits").insertBefore(newListItem, kiwi);

// document.getElementById("fruits").removeChild(newListItem);

// ============== 51º ==============

// const myBox = document.getElementById("myBox");
// const myBtn = document.getElementById("myBtn");

// myBtn.addEventListener("click", event => {
//     // event.target.style.backgroundColor = "lightcoral";
//     // event.target.textContent = "I'll punch u 👊😡";

//     myBox.style.backgroundColor = "lightcoral";
//     myBox.textContent = "I'll punch u 👊😡";
// });

// myBtn.addEventListener("mouseover", event => {
//     // event.target.style.backgroundColor = "yellow";
//     // event.target.textContent = "If u dare... 🙂";
    
//     myBox.style.backgroundColor = "#fffc57";
//     myBox.textContent = "If u dare... 🙂";
// });

// myBtn.addEventListener("mouseout", event => {
//     // event.target.style.backgroundColor = "lightgreen";
//     // event.target.textContent = "Click me 🥴";
    
//     myBox.style.backgroundColor = "lightgreen";
//     myBox.textContent = "Click me 🥴";
// });

// ============== 52º ==============

// const myBox = document.getElementById("myBox2");
// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//     if (event.key.startsWith("ArrowUp")) {
//         myBox.textContent = "👆🤓";
//         myBox.style.backgroundColor = "lightgreen";
//     }
//     else if(event.key.startsWith("ArrowDown")){
//         myBox.textContent = "👇🤓";
//         myBox.style.backgroundColor = "lightgreen";
//     }
//     else if(event.key.startsWith("ArrowLeft")){
//         myBox.textContent = "👈🤓";
//         myBox.style.backgroundColor = "lightgreen";
//     }
//     else if(event.key.startsWith("ArrowRight")){
//         myBox.textContent = "🤓👉";
//         myBox.style.backgroundColor = "lightgreen";
//     }
// });

// document.addEventListener("keyup", event => {
//     myBox.textContent = "☝🤓";
//     myBox.style.backgroundColor = "rgb(205, 108, 227)";
// });

// document.addEventListener("keydown", event => {
    
//     event.preventDefault();
    
//     if(event.key.startsWith("Arrow")){
//         switch(event.key){
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//            case "ArrowLeft":
//                 x -= moveAmount;
//                 break;            
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }

//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// });

// // document.addEventListener("keydown", event => {
// //    myBox.textContent = "✋🤮";
// //    myBox.style.backgroundColor = "lightgreen";
// // });

// // document.addEventListener("keyup", event => {
// //     myBox.textContent = "💀💀";
// //     myBox.style.backgroundColor = "rgb(205, 108, 227)";
// // });

// ============== 53º ==============

// const myBtn = document.getElementById("myBtn");
// const myImg = document.getElementById("myImg");

// myBtn.addEventListener("click", event => {

//     if(myImg.style.visibility === "hidden"){
//         myImg.style.visibility = "visible";
//         myBtn.textContent = "Hide";
//     }
//     else{
//         myImg.style.visibility = "hidden";
//         myBtn.textContent = "Show";
//     }

// });

// ============== 54º ==============

// let buttons = document.querySelectorAll(".myBtns");

// // buttons.forEach(button =>{
// //     button.addEventListener("click", event => {
// //         event.target.style.backgroundColor = "#777777";
// //         event.target.style.color = "#fff";
// //     });
// // });

// // buttons.forEach(button =>{
// //     button.addEventListener("mouseover", event => {
// //         event.target.style.backgroundColor = "lightcoral";
// //         event.target.style.color = "#fff";
// //     });
// // });

// // buttons.forEach(button =>{
// //     button.addEventListener("mouseout", event => {
// //         event.target.style.backgroundColor = "rgb(240, 240, 240";
// //         event.target.style.color = "#000";
// //     });
// // });

// // const newButton = document.createElement("button");
// // newButton.textContent = "Button 5";
// // newButton.classList = "myBtns";
// // document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".myBtns");

// buttons.forEach(button => {
//     button.addEventListener("click", event =>{
//         event.target.remove();
//         buttons = document.querySelectorAll(".myBtns");
//     });
// })

// ============== 55º ==============

// const myH1 = document.getElementById("myH1")
// const myBtn = document.getElementById("myBtn");

// // myBtn.classList.add("enabled");
// // myBtn.classList.remove("enabled");

// // myBtn.addEventListener("mouseover", event => {
// //     event.target.classList.toggle("hover");
// // });

// // myBtn.addEventListener("mouseout", event => {
// //     event.target.classList.toggle("hover");
// // });

// myH1.classList.add("enabled");
// myBtn.classList.add("enabled");

// myBtn.addEventListener("click", event => {

//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += "🍕"
//     } else {
//         event.target.classList.replace("enabled", "disabled");
//     }
   
// });

// let buttons = document.querySelectorAll(".myBtns");

// buttons.forEach(button => {
//     button.classList.add("enabled");
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.toggle("hover");
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.classList.toggle("hover");
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("click", event => {

//         if (event.target.classList.contains("disabled")) {
//             event.target.textContent += "👻";
//         } else {
//             event.target.classList.replace("enabled","disabled");
//         }

        
//     });
// });

// ============== 56º ==============

// function walkDog() {

//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{

//             const dogWalked = true;

//             if (dogWalked) {
//                 resolve("You walk the dog 🐕");
//             } else {
//                 reject("You DIDN'T walk the dog") 
//             }

//         },1500);
//     });

    
// }

// function cleanKitchen() {
    
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const kithcenCleaned = true;

//             if (kithcenCleaned) {
//                 resolve("You clean the kitchen 🧹");
//             } else {
//                 reject("You DIDN'T clean the kitchen"); 
//             }

//         },2500);
//     });

// }

// function takeOutTrash() {
   
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{

//             const trashTakeOut = true;

//             if (trashTakeOut) {
//                 resolve("You take out the trash 🚮");
//             } else {
//                 reject("You DIDN'T take out the trash"); 
//             }

//         },500);
//     })

// }

// async function doChores() {

//     try {        
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);

//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);

//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);

//         console.log("You finished all the chores");
//     } catch (error) {
//         console.error(error);
//     }

// }


// doChores()

// // walkDog().then(value => {console.log(value); return cleanKitchen()})
// //          .then(value => {console.log(value); return takeOutTrash()})
// //          .then(value => {console.log(value); console.log("You finished all the chores")})
// //          .catch(error => console.error(error))

// // walkDog(() =>{
// //     cleanKitchen(() => {
// //         takeOutTrash(() => console.log("You finished all the chores"));
// //     });
// // });

// ============== 57º ==============

// // const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// // const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
// // const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
// //                     {"name": "Patrick","age": 34,"isEmployed": true},
// //                     {"name": "Squidward","age": 50,"isEmployed": true},
// //                     {"name": "Sandy","age": 27,"isEmployed": true}]`;

// // const jsonString = JSON.stringify(names);

// // console.log(jsonString);

// fetch("person.json")
//     .then(response => response.json())
//     .then(values =>  values.forEach(value => console.log(value)));

// ============== 58º ==============

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//      .then(response => {
//           if(!response.ok){
//                throw new Error("Could nto fetch resource");
//           }
//           return response.json();
//      }
// .then(data => console.log(data))
// .catch(error => console.error(error));

async function fetchData() {
     try {

          const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
          
          if (!response.ok) {
               throw new Error("Could not fetch resource");
          }

          const data = await response.json();
          const pokemonSprite = data.sprites.front_default;
          const imgElement  = document.getElementById("sprite");

          imgElement.src = pokemonSprite;
          imgElement.style.display = "block";
     
     }
     catch (error) {
          console.error(error);
     } 
}