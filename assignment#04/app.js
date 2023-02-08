// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city = prompt("Enter your city name","karachi");
// if (city = "karachi") {
//    alert("welcome to the city of light")
//   } else {
//     alert("Welcome to the "+ city )
//   }




// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


// var gender = prompt("ENTER your gender");
// if ( gender == "male" ) {
//     alert("WELCOME SIR")
// } else {
//     alert("Welcome Ma'am");
// }


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


// var light = prompt("The color of traffic light");

// if ( light == "red" ) {
//     alert("Must stop");
// } else if( light== "yellow" ) {
//     alert('Ready to move');
// } else if( light== "green" ) {
//     alert('Move now');
// } else {
//     alert('This color signal does not Exist!');
// }



// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// var remFuel = prompt('your ramaining fuel in liters');
// if ( remFuel < 0.25  ) {
//     alert('Please refill the fuel in your car');
// } else {
//     alert('You are good to go');
// }



// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }


//  if("car" < "cat"){
// alert("car is smaller than cat");
// // }




// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:


//  var maths = +prompt('ENTER your maths marks');
//  var eng = +prompt('ENTER your English marks');
//  var physics = +prompt('ENTER your Physics marks');
//  var total = 300;
//  var marksObtained = maths + eng + physics;
//  var percentage = (marksObtained/total)*100 ;
//  if ( percentage >= 80 ) {
//     document.write('<h1>MARKS SHEET</h1>' + '<br />'+ '<br />'+ '<br />'+ '<b>Total Marks: ' + total + '<br />'+ '<b>Marks Obtained: ' + marksObtained + '<br />'+ '<b>Percentage: </b>' + percentage + "%" + '<br />' + '<b>Grade: </b>' + "A-one"+ '<br />' + '<b>Remarks:  </b>' + "Excellent"  )
//  }
//    else if ( percentage >= 70 ) {
//     document.write('<h1>MARKS SHEET</h1>' + '<br />'+ '<br />'+ '<br />'+ '<b>Total Marks: ' + total + '<br />'+ '<b>Marks Obtained: ' + marksObtained + '<br />'+ '<b>Percentage: </b>' + percentage + "%" + '<br />' + '<b>Grade: </b>' + "A"+ '<br />' + '<b>Remarks:  </b>' + "Good"  )
//  }
//    else if ( percentage >= 60 ) {
//     document.write('<h1>MARKS SHEET</h1>' + '<br />'+ '<br />'+ '<br />'+ '<b>Total Marks: ' + total + '<br />'+ '<b>Marks Obtained: ' + marksObtained + '<br />'+ '<b>Percentage: </b>' + percentage + "%" + '<br />' + '<b>Grade: </b>' + "B"+ '<br />' + '<b>Remarks:  </b>' + "You need to improve"  )
//  }
//    else  {
//     document.write('<h1>MARKS SHEET</h1>' + '<br />'+ '<br />'+ '<br />'+ '<b>Total Marks: ' + total + '<br />'+ '<b>Marks Obtained: ' + marksObtained + '<br />'+ '<b>Percentage: </b>' + percentage + "%" + '<br />' + '<b>Grade: </b>' + "<b>Fail</b>"+ '<br />' + '<b>Remarks:  </b>' + "Sorry"  )
//  }




// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var num = 7;
// var uNum = +prompt("Guess the secret number",'its between 0 1o 9');
// if ( uNum == num ){
//     alert("Bingo! correct answer");

// } else if ( uNum == ++num) {
//     alert('Close enough to the correct answer');
// } else {
//     alert('wrong answer please try again');
// }



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


// var num = prompt('check if the given number is divisble by 3 or not');
// if ( num%3 == 0 ){
//     alert('yes this number is divisble by 3');
// } else {
//     alert('the given number is not divisble by 3');
// }




// 9. Write a program that checks whether the given input is an
// even number or an odd number.


//  var num = +prompt('Check wether a number is odd or even');
//  if ( num%2 == 0 ){
//     alert('The given number is Even');
//  } else {
//     alert('The given numer is Odd');
//  }




// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// var temp = +prompt('Enter the Temp in C');
// if ( temp >= 40 ){
//     alert('It is too hot outside');
// } else if ( temp >= 30 ){

//     alert('The weather today is normal');
// } else if ( temp >= 20 ){
//     alert('Todays weather is cool');
// } else if ( temp >= 10 ){
//     alert('OMG! Todays weather is so cool');
// } else {
//     alert( 'its freezing outside');
// }






// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


// var num1 = +prompt('Enter Number 1 here: ');
// var num2 = +prompt('Enter Number 2 here: ');
// var opt = +prompt('Enter the Operator here: ');
// result = num1 + opt +num2 
// console.log(result);

//---------------------------------IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS-------------------------//


// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// var char = prompt('Enter any character');





// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var num1  = +prompt('Enter number 1');
// var num2  = +prompt('Enter number 2');
// if (num1>num2){
//     alert(num1 + " Is greater than "+num2);
// } else if (num2>num1){
//     alert(num2 +" Is greater than "+ num1);
// } else{
//     alert(num1 + " and "+num2 + " is equal");
// }



// display the larger. Also show if the two integers are equal.
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


// var num = +prompt('Enter a number!');
// if (num>0){
//     alert('The given number is postive');
// } else {
//     alert ('The given number is negative');
// }




// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise


// var char = prompt("Enter any word");
// if (char == "a" ||char == "e" ||char == "i" ||char == "o" ||char == "u" ){
//     alert("Is a vowel word");
// } else {
//     alert(flase);
// }




// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var userPass = "neon@389"
// var pass = prompt("Enter your password please!");
// if (pass == ""){
//     alert('Please enter the password!');
// } else if ( pass == userPass){
//     alert('Correct! The password you entered matches the original password');
// } else {
//     alert('Incorrect Password!');
// }




// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
//     greeting = "Good Evening";
// }
// console.log(greeting)



// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


