//const age = 20;
//const ageMessage = age >= 18 ? "Congratulations! You're an adult!" : "Enjoy your childhood while it lasts!";

//ageMessage;
//=> "Congratulations! You're an adult!" 

//if(condition){
  // statements
 //} else {
  // statements
 //}

 //if (someNumber <= 400)  {
  //console.log("This one is on me!");
//else (someNumber > 400); {
  //console.log("I will gladly take your thirty bucks.");

function scuberGreetingForFeet(someNumber){
      
let result 
if (someNumber <= 400) {
  result = "This one is on me!";
  return result
} else if (someNumber > 2000 && someNumber < 2500){
  result = ("I will gladly take your thirty bucks.");
  return result
 } else if (someNumber > 2500 ){
    result = ("No can do.");
    return result
 }
}
 function ternaryCheckCity(city){

    return ((city === "NYC") ? "Ok, sounds good." : "No go.")
    
 }
 // switch(expression) {
  //case x:
    // code block
    //break;
  //case y:
    // code block
    //break;
  //default:
    // code block
 function switchOnCharmFromTip(tip){
   switch (tip) {
     default: 
      return "Bye.";
     case "generous":
     return "Thank you so much.";
     case "not as generous":
       return "Thank you.";


   }
 }
