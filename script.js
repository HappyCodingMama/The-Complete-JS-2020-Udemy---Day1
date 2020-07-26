/*
Coding Challenge 1

Mark and John are trying to compare there BMI(Body Mass Index),
which is calculated using the formula: 
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter)

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable contaings information about whether Mark
has a higher BMI than John.
4. Print a string to the console containg the variable from step 3.
(Something like "Is Mark's BMI higher than John's? true").
*/

// var massMark = 65;
// var heightMark = 1.75;

// var massJohn = 72;
// var heightJohn = 1.84;

// var bmiMark = massMark / (heightMark * heightMark);
// var bmiJohn = massJohn / (heightJohn * heightJohn);

// var higherBMI = bmiMark < bmiJohn; 

// console.log('John:' + bmiJohn.toFixed(2) + ' has a higher BMI than Mark:' 
// + bmiMark.toFixed(2) + ' is ' + higherBMI);

// if (bmiJohn > bmiMark) {
//     console.log ( 'John ' + bmiJohn.toFixed(2) + ' has higherBMI.' )
// } else {
//     console.log ( 'Mark has higherBMI.' )
// }






/* 
Coding Challenge 2
John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
and 123 points.

1.Calculate the average score for each team
2.Decide which team wins in average(highest average score), and
print the winner to the console.
Also include the average score in the output.
3. Then change the scores to show different winners. 
Don't forget to take into account there might be a draw(the same average score)

4.EXTRA: Mary also plays basketball, and her team scored 97, 134 and 
105 points. Like before, log the average winner to the console.
HINT: you will need the && operator to take the decision.
5. Like before, change the scores to generate different winners, keeping in mind
there might be draws.

*/

// var avgJohn = (89 + 120 + 103) / 3;
// var avgMike = (116 + 94 + 123) / 3;


// var highestAvg = avgJohn > avgMike ? "John's team is winner" : "Mike's team is winner";
// console.log(highestAvg);

// if (avgJohn > avgMike) {
//     console.log("John's team is winner" );
// } else if (avgJohn < avgMike) {
//     console.log("Mike's team is winner" );
// } else {
//     console.log("Both got the same average.");
// }

// var avgMary = (97 + 134 + 105) / 3;

// if (avgJohn > avgMike && avgJohn > avgMary) {
//     console.log("John's team is winner" );
// } else if (avgJohn < avgMike && avgMary < avgMike) {
//     console.log("Mike's team is winner" );
// } else if  (avgMary > avgJohn && avgMary > avgMike) {
//     console.log("Mary's team is winner" );
// } 

// console.log("The average of John's team : " + avgJohn +
// ", The average of Mike's team : " + avgMike +
// ", The average of Mary's team : " + avgMary);


//     if (avgJohn > avgMike && avgJohn > avgMary){
//     console.log("John's team is winner" );
//     } else if (avgJohn < avgMike && avgMary < avgMike) {
//     console.log("Mike's team is winner" );  
//     } else if(avgMary > avgJohn && avgMary > avgMike) {
//     console.log("Mary's team is winner" ); 
//     } else if (avgJohn === avgMike && avgJohn < avgMary) {
//     console.log("Mary's team is winner" ); 
//     } else if (avgJohn > avgMike && avgMike === avgMary) {
//     console.log("John's team is winner" ); 
//     } else if  (avgMike > avgJohn && avgJohn === avgMary) {
//     console.log("Mike's team is winner" ); 
//     } else {
//     console.log("All teams got the same average." ); 
//     }








