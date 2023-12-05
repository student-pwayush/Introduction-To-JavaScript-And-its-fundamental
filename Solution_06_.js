function calculateBMI(weight, height) 
{

  let bmi = weight / (height * height);
  return bmi;
}

let weightInKg = 30; 
let heightInMeters = 2;

let result = calculateBMI(weightInKg, heightInMeters);

console.log(`Your BMI is: ${result}`);