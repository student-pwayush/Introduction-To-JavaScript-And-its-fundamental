function calculateSimpleInterest(principal, rate, time) {
  // Formula for simple interest: (principal * rate * time) / 100
  let simpleInterest = (principal * rate * time) / 100;
  return simpleInterest;
}

let principalAmount = 1000; 
let interestRate = 5; 
let timePeriod = 2; 

let result = calculateSimpleInterest(principalAmount, interestRate, timePeriod);

console.log(`Simple Interest: ${result}`);