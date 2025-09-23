const readline=requier('readline-sync');

var weight=readline.question("Enter your weight in kg:");
var height=readline.uestion("Enter your height in cm:");
var bmi=weight/((height/100)**2)

console.log("Hello! Your BMI is:" + bmi)