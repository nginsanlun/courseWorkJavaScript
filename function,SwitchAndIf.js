
function isLeapYear(year){
	if(year % 4 ===  0 ){
		if (year % 100 === 0) {
			if (year % 400) {
				return "Leap Year.";
			}
			else{
				return "Not Leap Year.";
			}
		}else{
			return "Leap Year.";
		}
	} else{
		return "Not Leap Year.";
	}
}
isLeapYear(2012);
//2012 is a Leap Year.

function getMilk(bottles){
    var cost = bottles * 1.5;

console.log(`${bottles} is costing ${cost}`);
}
getMilk(2);
//2 is costing 3

function getMilk(bottles){
    var cost = bottles * 1.5;
return(`${bottles} is costing ${cost}`);
}
getMilk(2);
//"2 is costing 3"

function lifeInWeeks(age){
    var yearsRemaining = 100 - 24;
    var days = yearsRemaining *365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining *12;
    
console.log(`I have ${days} days, ${weeks} weeks and ${months} months left. You have many times and keep going well.`);
}
lifeInWeeks(24);
//I have 27740 days, 3952 weeks and 912 months left. You have many times and keep going well.

function getMilk(money){
return money * 1.5;
}
var change = getMilk(4);
console.log(change);
//6

function calcBottles(noOfBottle, amountOfCost){
var allAmount = noOfBottle * amountOfCost;
return(`You bought ${noOfBottle} bottles and cost ${allAmount}.`);
//console.log(`You bought ${noOfBottle} bottles and cost ${allAmount}.`);
}
calcBottles(5, 1550);
//"You bought 5 bottles and cost 7750."


function bmiCalculator(weight, height){
var bmi = weight / Math.pow(height, 2);
return Math.round(bmi);
console.log(`${bmi} is Calculator`);
}
bmiCalculator(65, 1.8);
//20



//  <------  SWITCH CASE  ------>

var dice = 4;
switch(dice){
    case 1: console.log("The dice is One");
    break;
    case 2: console.log("The dice is Two");
    break;
    case 3: console.log("The dice is Three");
    break;
    case 4: console.log("The dice is Four");
    break;
    case 5: console.log("The dice is Five");
    break;
    case 6: console.log("The dice is Six");
    break;
}
//The dice is Four

var dice = prompt("Enter dice number!");
switch(dice){
    case '1': alert("The dice is One");
    break;
    case '2': alert("The dice is Two");
    break;
    case '3': alert("The dice is Three");
    break;
    case '4': alert("The dice is Four");
    break;
    case '5': alert("The dice is Five");
    break;
    case '6': alert("The dice is Six");
    break;
}
//The dice is Three


var dice = parseInt(prompt("Enter dice number!"));
switch(dice){
    case 1: console.log(`The dice is ${dice}`);
    break;
    case 2: console.log(`The dice is ${dice}`);
    break;
    case 3: console.log(`The dice is ${dice}`);
    break;
    case 4: console.log(`The dice is ${dice}`);
    break;
    case 5: console.log(`The dice is ${dice}`);
    break;
    case 6: console.log(`The dice is ${dice}`);
    break;
    default:console.log('Another Number');
}
//The dice is 4


// <------  IF else CASE  ------>

var birthYear = 1995; 
var age = 2030 - birthYear;
if(age >= 18){
 console.log("You can vote");
}
else{
console.log("You have to wait to vote till 18.");
}