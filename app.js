//----------------------------------------------------Chap : 35 - 38--------------------------------------------

//Q# 01 . Write a function that displays current date & time in your browser.

// function getTime(){
//     var now = new Date();
//     document.write(now);
// }
// getTime();

//Q# 02  Write a function that takes first & last name and then it greets the user using his full name.

// function getName(){
//     var firstName = prompt("Enter Your First Name");
//     var lastName = prompt("Enter Your Last Name");
//     var fullName = firstName + " " + lastName;
//     document.write(fullName);
// }
// getName();


//Q# 03 . Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function sum(){
//     var num1 = +prompt("Enter First Number");
//     var num2 = +prompt("Enter Second Number");
//     var result = num1 + num2;
//     document.write(result);
// }
// sum();


//Q# 04 . Calculator:
//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculator() {
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");
//     var opera = prompt("Enter your operator")
//     if(opera === "*"){
//         document.write(num1 * num2)
//     }
//     else if(opera === "+"){
//         document.write(num1 + num2)
//     }
//     else if(opera === "-"){
//         document.write(num1 - num2)
//     }
//     else if(opera === "%"){
//         document.write(num1 % num2)
//     }
//     else if(opera === "/"){
//         document.write(num1 / num2)
//     }
//     else{
//         alert("Enter a valid operator")
//     }
// }
// calculator();



//Q# 05. Write a function that squares its argument?

// function square(num1){
//     var res = num1 * num1;
//     document.write(res)
// }
// square(4)

//Q# 06. Write a function that computes factorial of a number?

// function factorial(){
//     var num = +prompt("Enter Your Number");
//     if(num === 0 || num === 1)
//     return 1;
//     for(var i = num - 1 ; i >= 1 ; i--){
//         num = num * i
//     }
//     document.write(num);
//     return num;
// }
// factorial();

//Q# 07. Write a function that take start and end number as inputs & display counting in your browser.

// function counting(){
//     var num1 = +prompt("Enter The Starting Number For Counting");
//     var num2 = +prompt("Enter Last Number Of Counting");
//     for (var i = num1 ; i <= num2 ; i++){
//         document.write(i + "</br>" )
//     }
// }
// counting();

//Q# 08
 
// SKIP


// Q# 09. Write a function that calculates the area of a rectangle.

// var height = 5;
// function calculateArea(width , height){
//     var area = width * height;
//     return area
// }
// var r = calculateArea(5, height);
// console.log("Area is " + " " + r + " " + "square.meters");

//Q# 10. Write a JavaScript function that checks whether a passed string is palindrome or not?

// function checkPalindrome(string){
//     var leng = string.length;
//     for (var i = 0 ; i < leng / 2 ; i++){
//         if(string[i] !== string[leng - 1 -i]){
//             return "It Is Not A Palindrome"
//         }
//     }
//     return "It Is A Palindrome"
// }
// var string = prompt("Enter a string").toLocaleLowerCase();
// var value = checkPalindrome(string);
// document.write(value);


// Q# 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 

// function upperCase(str){
//     var word = str.split(' ')
//     for (var i = 0; i < word.length; i++){
//         var firstLetter = word[i].charAt(0).toUpperCase();
//         var restOfLetters = word[i].slice(1);
//         word[i] = firstLetter + restOfLetters ;
//        }

//        var newStr = word.join(' ');
//        return newStr;
//     }

//     var str = prompt("Enter a string");
//     var result = upperCase(str);
//     document.write(result)

// Q# 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 

// function findLongestWord(str1) {
// var word1 = str1.split(' ');
// var longestWord = " ";
// for(var i = 0; i < word1.length; i++){
//     if(word1[i].length > longestWord){
//         longestWord = word1[i];
//     }
// }
// document.write(longestWord)
// return longestWord;

// }
// findLongestWord("Hello how are");


// Q# 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of function | JAVASCRIPToccurrences of the specified letter within the string. 

// function checkOccurance(str2 , letter){
//     var letter_count=0;
//     for(var i = 0; i < str2.length; i++){
//         if(str2.charAt(i) === letter){
//             letter_count += 1;
//         }
//     }
//     document.write(letter_count)
//     return letter_count
// }
// checkOccurance("How are you feeling today brother" , "o")

// Q# 14. The Geometrizer
//part 1

// function calcCicumference(radius){
//     var circumferenceOfCircle = 2 * Math.PI * radius;
//     document.write(circumferenceOfCircle)
//     return circumferenceOfCircle
// }
// var radius = +prompt("Enter radius")
// var result = calcCicumference(radius);

//part2

// function calcArea(radius){
//         var areaOfCircle =  Math.PI * radius * radius;
//         document.write(areaOfCircle)
//         return areaOfCircle
//     }
//     var radius = +prompt("Enter radius")
//     var result = calcArea(radius);







//--------------------------------------------------Chapter Events(43 to 48)--------------------------------------------------

// ------------------------------------------------------ Question # 01 --------------------------

// function showAlert(){
//     alert("Hello EveryOne!");
// }

// ------------------------------------------------------ Question # 02 -----------------------

// function thanks(){
//     alert("Thanks  for purchasing a phone from us!");
// }

// // ------------------------------------------------------ Question # 03 ----------------------

// function del() {
//     const element = document.querySelector('tr');
//     element.remove();
//   }
// ------------------------------------------------------ Question # 04 -------------------------

// function change(){
//    let image  = document.querySelector('img');
//    image.src = "./images/images (1).jpeg"
// }

// function out(){
//     let image1  = document.querySelector('img');
//     image1.src = "./images/apple-iphone-14-blue-128gb-zdd.jpg"
//  }

// ----------------------------------------------------- Question # 05 -----------------------------

   // Get the counter element
//    var counterElement = document.querySelector('.counter');

//    // Get the increase and decrease buttons
//    var increaseBtn = document.getElementById('increaseBtn');
//    var decreaseBtn = document.getElementById('decreaseBtn');

//    // Initialize the counter value
//    var counter = 0;
//    counterElement.textContent = counter;

//    // Increase button click event handler
//    increaseBtn.addEventListener('click', function() {
//      counter++;
//      counterElement.textContent = counter;
//    });

//    // Decrease button click event handler
//    decreaseBtn.addEventListener('click', function() {
//      counter--;
//      counterElement.textContent = counter;
//    });

//----------------------------------------------------------- chapter 49 to 52--------------------------------------------------------

// ----------------------------------------------------- Question # 01 ------


//     var form = document.getElementById('signup-form');
// var output = document.getElementById('output');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   var name = form.elements.name.value;
//   var email = form.elements.email.value;
//   var password = form.elements.password.value;

//   output.innerHTML = "<p>Name:</p>" + name + "<p>Email:</p>" +email +"<p>Password:</p>"+ password;

//   form.reset();
// });

// ----------------------------------------------------- Question # 02 ------



// function expandLoris() {
//     var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus.They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species - dependent.The hands and feet of slow lorises have several";
//     document.getElementById("slowLoris").innerHTML = expandedParagraph;
// }

// ----------------------------------------------------- Question # 03 ------



// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_name=document.getElementById("new_name").value;
//  var new_country=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }