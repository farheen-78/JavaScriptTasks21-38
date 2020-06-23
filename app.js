// ****************************Chapter#21-25*********************************************

// Q.1********************************************************

// var firstName=prompt("Enter your first name:");
// var lastName=prompt("Enter your last name:");
// var fullName=firstName+lastName;
// document.write("Welcome "+" "+fullName);

// Q.2*****************************************************

// var mobilePhone=prompt("Enter your favurite mobile phone model:");
// var strLength=mobilePhone.length;
// document.write("My favurite phone is:"+" "+mobilePhone+"<br>"+"Length of string:"+"  "+strLength);

// Q.3*********************************************************

// var city="Pakistani";
// var letterIndex=city.indexOf("n");
// document.write("String:"+"  "+city+"<br>"+"Index of 'n':"+letterIndex);

// Q.4***********************************************************

// var text="Hello World";
// var letter=text.lastIndexOf("l");
// document.write("String:"+"  "+text+"<br>"+"Last Index of 'l':"+letter);

// Q.5**************************************************************

// var city="Pakistani";
// var chIndex=city.charAt(3);
// document.write("String:"+" "+city+"<br>"+"Character at index 3:"+chIndex);


// Q.6*********************************************************************

// var firstName=prompt("Enter your first name:");
// var lastName=prompt("Enter your last name:");
// var fullName=firstName.concat(lastName);
//  document.write("Welcome "+" "+fullName);

// Q.7**************************************************************************

// var word="Hyderabad";
// var a=word.slice(0,5);
// var b=word.slice(5);
// var rep="Islam";
// var con=rep+b
// document.write("City:"+" "+word+"<br>"+"After replacement:"+con);

// Q.8**************************************************************************

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write
// var rep=message.replace(/and/g,"&");
// document.write(rep);

// Q.9****************************************************************************

// var num=472;
// var str=num.toString();
// document.write("Value:"+" "+str+"<br>"+"Type:"+" " +"String"+"<br>");
// var str="472";
// var no=parseInt(str);
// document.write("Value:"+" "+no+"<br>"+"Type:"+" " +"Number");

// Q.10***************************************************************************

// var text=prompt("Enter any text:");
// var cap=text.toUUpperCase();
// document.write("User Input:"+" "+text+"<br>"+"Upper Case:"+" "+cap);

// Q.11***************************************************************************

// var text=prompt("Enter any text:");
// var lett=text.slice(0,1);
// var cap=lett.toUpperCase();
// var remain=text.slice(1);
// var text1=cap+remain;
// document.write("User input:"+" "+text+"<br>"+"Title case:"+" "+text1);

// Q.12*************************************************************************

// var num=35.36;
// var a=num.toString();
// var b=a.slice(0,2);
// var c=a.slice(3,5)
// var d=b+c;
// document.write("Number:"+" "+num+"<br>"+"Result:"+" "+d);

// Q.13**********************************************************************

// var userName=prompt("Enter user name:");

// var check;
//  for(var i=0;i<userName.length;i++){

//     check=userName[i].charCodeAt(i)
    
//     if(check ===64 || check ===33 || check ===44 || check===46){

//     alert("Please enter a valid no");
//     break;
// }     
 
//  else {
//      alert("User name is valid");
//    break;

//  }
// }

// Q.14******************************************************************************

//  var a = ["cake", "apple pie","cookie", "chips", "patties"];
//  var search=prompt("Enter item you want to buy");
//  var item=search.toLowerCase();
 

//      if(a.indexOf(item)!==-1){
//          alert(item+" "+"is available at index"+" "+a.indexOf(item)+" "+"in our bakery");
//      }
//     else{
//         alert("We are sorry."+item+" "+"is not available in our bakery");
        
//     }

// Q.15*********************************************************************

// var passWord=prompt("Enter Password:");
// var a=passWord.charAt(0);
// if(a>=0 || a<=9){
//     alert("Entered Password :"+" "+passWord+"\nPassword can not begin with a number\nPlease enter a valid password");
// }
// else if (passWord.length>=7){
//     alert("Password is not valid");
// }
// else{
//     alert("Password is valid");
// }

// Q.16************************************************************

    
// var university="University of Karachi";
// var a=university.split("");
// for( var i=0;i<a.length;i++){
//  document.write(a[i]+"<br>");
//  }

// Q.17*********************************************************************************

// var a=prompt("Enater a word");
// var b=a.charAt(a.length-1)
// document.write("User input:"+" "+a+"<br>"+"Last character of input:"+" " +b);

// Q.18**********************************************************************************
//  var str="The quick brown fox jumps over the lazy dog.";
// var a=str.match(/the/gi);
// var l=a.length;
// document.write("Text:"+" "+str+"<br>"+"There are"+" "+l+" "+"occurrence(s) of the word 'the'");


// ****************Chapter#26-30********************************************************************

// Q.1****************************************************************

// var a=prompt("Enater a positive integer:");

// a.******************
// document.write("Number:"+" " +a+"<br>");

//  b.***************
// var r=Math.round(a);
// document.write("Round off value:"+" "+r+"<br>");

// c.*****************
// var f=Math.floor(a);
// document.write("Floor value:"+" "+f+"<br>");

// d.****************
// var c=Math.ceil(a);
// document.write("Ceil value:"+" "+c);

// Q.2**************************************************************

// var a=prompt("Enater a negative floating point number:");

// a.***********
// document.write("Number:"+" " +a+"<br>");

// b.************
//  var r=Math.round(a);
//  document.write("Round off value:"+" "+r+"<br>");

// c.************
//  var f=Math.floor(a);
//  document.write("Floor value:"+" "+f+"<br>");

// d.***************
// var c=Math.ceil(a);
//  document.write("Ceil value:"+" "+c);

// Q.3*******************************************************

// var a=+prompt("Enter any no:");
// var b=Math.abs(a);
// alert("The absolute value of"+" "+a+" "+"is"+" "+b);

// Q.4*****************************************************

// var no=(Math.random()*6)+1;
// var f=Math.floor(no);
// document.write("Random dice value "+" "+f);

// Q.5*************************************************

// var hUser=prompt("Enter head user name:");
// var tUser=prompt("Enter tail user name");
// var toss=(Math.random()*2)+1;
// var f=Math.floor(toss);
//  if(f===1){
// document.write(f+"<br>"+"random coin value:"+" "+hUser);
// }
// else{
//     document.write(f+"<br>"+"random coin value:"+" "+tUser);

// }

// Q.6******************************************************

// var a=(Math.random()*100)+1;
// var f=Math.floor(a);
// document.write("random number between 1 to 100:"+" "+f);

// Q.7*******************************************************

// var w=prompt("Enter your weight:");
// var x=parseFloat(w);
// document.write("The weight of user is"+" " +x+" "+"kilograms");

// Q.8********************************************************

// var r=Math.floor((Math.random()*10)+1);
// var no=+prompt("Enter a no between 1 to 10");

// if(no===r){
//     alert("Congratulate  your no is right");
// }

// else{
//     alert("Try again");
// }

 // ****************Chapter#31-34*********************************************************

//  Q.1*****************************************

//  var a=new Date();
//  document.write(a);

// Q.2********************************************

// var s=a.toString();
// var m=s.slice(4,7);
// document.write("Current month:"+" "+m);

// Q.3************************************************

// var d=new Date();
// var s=d.toString();
// var day=s.slice(0,3);
//  alert("Today is :"+" "+ day);

// Q.4********************************************************

// var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var a=new Date();
// var b=a.getDay();

// if(b===0 || b===6)
// {
//     alert("It's Fun day"+" "+day[b]);
//  }
 
// Q.5****************************************************************
// var a=new Date();
// var b=a.getDate();

//  if(b<16){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
//  }

// Q.6***********************************************************************

// var a=new Date("December 5,2015 22:32:23");
// var b=a.getTime();
// var c=b/(1000*60*60);
// document.write("Current Date:"+" "+a+"<br>"+"Elapsed milliseconds since January 1,1970:"+" "+b+"<br>"+"Elapsed minutes since January 1,1970:"+" "+c);

// Q.7*************************************************************************

// var a=new Date();
// var b=a.getHours();
// if(b<12){
//     document.write("It's AM");
// }
// else{
// document.write("It's PM");
// }

// Q.8********************************************************************


// var laterDate=new Date("December 31,2020");
// document.write("Later Date:"+" "+laterDate);

// Q.9*****************************************************************
//  var a=new Date("April 25,2020");
//  var b=new Date("June 18,2015");
//  var c=a.getTime();
//  var d=b.getTime();
//  var diff=c-d
//  var z=Math.floor(diff/(1000*60*60*24));
//   document.write(z+" "+"days have passed since 1st Ramazan,2015 ");

// Q.10***************************************************************

// var d1=new Date("December 5,2015 22:50:16");
// var d2= new Date("January 1,2015");

//  var s1=d1.getTime();
//  var s2=-d2.getTime();
//  var diff=s1-s2;
//  var sec=diff/1000;
// document.write("On reference date"+" "+d1+","+"<br>"+sec+" "+"seconds had passed since begining of 2015");


// Q.11*******

// var a=new Date();

// var b=(a.setHours(a.getHours() - 1));

// document.write("Current Date:"+" "+a+"<br>"+"1 hour ago,it was"+" "+b);

// Q.12****

// var a=new Date("Decembere 05,2015");
// var b=new Date("December 05,1915");
//  document.write("Current Date:"+" "+a+"<br>"+"100 years back,it was"+" "+b);

// Q.13****

// var dob=new Date(prompt("Enetr your date of birth","December 1 1990"));
// var dobMili=dob.getTime();

// var today=new Date();
// var todayMili=today.getTime();
// var diff=todayMili-dobMili;
// var age=Math.floor(diff/(1000*60*60*24*30*12));
// alert("Your age is:"+" "+age);


// Q.14****

// var cName=prompt("Enter Customer Name:");
// var month=prompt("Enter current month");
// var nUnits=+prompt("No of Units:");
// var chargPerunit=+prompt("Enter cahrges per unit");
// var latePayment=350;
// var netAmount=nUnits*chargPerunit;
// var grossAmount=netAmount+latePayment;

// document.write("<h1> K-Electric-Bill</h1>");
// document.write("Customer name:"+" "+cName+"<br>"+"Month:"+" "+month+"<br>"+"Number of units:"+" "+nUnits+"<br>"+"Chargers per unit:"+" "+chargPerunit+"<br>"+"Net Amount Payable(within due date):"+" "+netAmount+"<br>"+"Late payment surcharge:"+" "+latePayment+"<br>"+"Gross Amount Payable(after due date):"+" "+grossAmount);


// ****************************Chapter#35-38******************************************************

// Q.1*****************************************************************

// function date(){

// document.write(new Date());
// }

// date();

// Q.2***************************************************************************

// function fullName(firstName,lastName){
//         return  "Hello"+" "+firstName+" "+lastName;
// }
// alert(fullName("farheen","fatima"));

// alert(fullName("Bilal","Ahmed"));

// Q.3*********************************************************************************
// function sum(){

//  var a=+prompt("Enter 1st no:");
//  var b=+prompt("Enter 2nd no:");
//  return a+b;
// }
// alert(sum());

// Q.4******************************************************************

// function calc(num1,opr,num2){

//     if(opr==="+"){
//         return num1+num2;
//     }
//     if(opr==="-"){
//         return num1-num2;
//     }
// if(opr==="*"){
//         return num1*num2;
//     }
//     else{
//         "Incorrect operator";
//     }
//     }

//     var result=calc(5,"+",8);
//     var result=calc(5,"*",8);
//     alert(result);

// Q.5************************************************************************

// function square(x){
// return x*x;
// } 
// var s=square(4);
// alert(s);


// Q.6************************************************************************
//  var ans=1;
//   function factorial(n){
   
//      for(var i=n;i>=1;i--){
//          ans=ans*i;
//           n--;   
  
//      } 
//             return ans;
//  }
//  var f= factorial(5);
// alert(f);

// Q.7***********************************************************************************

//  function count(){
//         var firstNo=+prompt("Enter 1st no:");
//         var lastNo=+prompt("Enter 2nd no:");
    
//         for(var i=firstNo;i<=lastNo;i++){
//         document.write(i+"<br>");
//     }
// }
// count();

// Q.8*******************************************************************
// var a,b,h;
// function calculateHypotenuse(){
//      var b=+prompt("Enter Base:");
//      var p=+prompt("Enter Perpendicular:");
        
   
//      function calculateSquare(){
//          a=b*b;
//          b=p*p;
//          h=a+b;
//         return h 

//      }
//         return calculateSquare();
// }

// var g=calculateHypotenuse();
//  console.log(g);

// Q.9****************************************************************************

//********* */ (i)Arguments as value**************
// var a;
// function areaTriangle(w,h){
//     a=w*h;
//     return a;
// }
// var area=areaTriangle(6,5);
// alert(area);

//********* */ (ii)Arguments as variable**************
// var a;
// var w,h;
// function areaRectangle(w,h){
//     w=+prompt("Enter weight of the rectangle:");
//     h=+prompt("Enter height of the rectangle:");
//     a=w*h;
//     return a;
   
// }
// var area=areaRectangle(w,h);
// console.log(area);

// Q.10*********************************************************************
// var chk;
// function checkPalindrome(word){
//      word=prompt("Enter any word");
//     chk="";
//     for(var i=word.length-1;i>=0;i--){
//         chk +=word[i];
//     }
//       if(chk===word){
//           console.log(word+" "+"is palindrome word");
//       }
// else{
//     console.log("Not a palindrome word");
// }
// }

// checkPalindrome();

// Q.11************************************************************************

// function capital(str){
// var  a=str.split(" ");
//   for(var i=0;i<a.length;i++){

//       a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1);
     
//   }
//   return a.join(" ");
// }
// var c=capital("the quick brown fox");
// console.log(c);

// Q.12*********************************************************************

// function largestWord(str){
//    var x=str.split(" ");
    
//    var word="";
   
//    for (var i=0;i<=x.length;i++){

//        if(x[i].length>x[i+1].length){
//       word=x[i];
//   break;
//        }
// else{
//     word=x[i+1];
//     break;
// }
//     }
  
// return word;
// }

// var l=largestWord("Web Development Tutorial");

// console.log("Largest word is:"+" "+l);

// Q.13**************************************************************************

// function  noOccur(str,l){
//      l=/o/gi;
//     var a=str.match(l);
//     var b=a.length;
//   document.write("String:"+" "+str+"<br>"+"There are"+" "+b+"  "+"occurence of the letter 'o'");


// }
// noOccur('JSResourceS.com', 'o');

// Q.14**********************************************************************

//***** function of calcCircumference******

// function calcCircumference(r){
//     var c=2 * 3.14*r;
//     return c;
// }
// var g=calcCircumference(3);
// console.log("The circumference is"+" "+g);

// ******function of calcArea********

// function calcArea(r){
//  var a=3.14*r*r;
//  return a;
// }
// var g=calcArea(5);
// console.log("The area is:"+" "+g);