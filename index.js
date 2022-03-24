// Determine whether a number is divisible by 4 with no remainders
//Simple if-else statement
let x= 15098348957
//Using the modulus, we can dictate if a number is divisible by 4 by if there is a remainder using the modulus operator
let xPrime= x%4
let xInitial= x/4
//console.log(xPrime)

//Here we see the operator in action- the statement dictates that if xPrime has any number above 0, indicating there is a remainder, then the number is not divisible by 4. Probably the easiest way to do this? Probably see how you can tell if a number is divisible by 4 using only the xInitial- how to tell JS to look out for decimals? A problem for later to be sure.
//Also, xInitial there to be shown the value obtained to the user- don't think they'd care to see the modulo value really.
if (xPrime > 0) {
  console.log(`The number ${x} is not divisible by 4 with a value of ${xInitial}`);
} else {
  console.log(`The number ${x} is divisible by 4 with a value of ${xInitial}`)
}

//Prints the values and conditions properly- current issue, try to interpolate ',' indicating proper separator between thousands, millions, billions, etc for easier viewing/interpretation

//Created a ternary operator variant!! Guess what? Still looks clustered!! Find way to make more efficient/aesthetic
xPrime > 0 ? console.log(`The number ${x} is not divisible by 4 with a value of ${xInitial}`) : console.log(`The number ${x} is divisible by 4 with a value of ${xInitial}`);

//Next step- try to set it up to be relayed via console as words instead of numerically? e.g., 1,259 = One thousand two hundred fifty-nine
//Also, add placement-indicator below number? e.g.,
//      62,871,599,374,536
//trillion,bil,mil,thousand, hundred
// ^ Shorthand, collapse, something to make it easier to interpret upon initial inspection. Very helpful for interpreting incredibly large numbers, can be useful for scientific endeavors when dealing with large/small scale quantities.

//