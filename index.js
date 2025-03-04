//❗❗ PLEASE READ THE README file for project instructions, helpful resources, additional tasks and stretch problems, and more ❗❗ 

// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log('example task:', processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
    "Counter1" uses a closure in order to not only to count up an integer with the variable "count", but also store that information and build off of it in memory. Subsequently,
    "counting up". Counter 2 however does not make use of a closure, so in return while it would add one to "count", the program has no way of storing that information and invoking
    "counter2" would only result in the result "1" no matter how many times you do so.
  2. Which of the two uses a closure? How can you tell?
     As previously mentioned, "counter1" makes use of a closure by being defined by the nesting of the function "counter" in "counterMaker" and having "counter" reference "count" which
    is outside of it's scope. This results in "count"'s count being stored in memory and allowing it to be subsequently updated.
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?
     If you needed "count" to remain stagnant by it's inital defined value for any reason you would use 'counter2'. If you needed to update a variable for any reason, you would then use
     'counter1' that way the value it is changing remains the same.
*/  

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning() {
    return Math.floor(Math.random() * 3)
}

console.log(`Task 2`, inning())

/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 in the first parameter
  2. Receive a number of innings to be played in the second parameter
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(callback, innings){
  const lastInning = {}
  let Home = 0
  let Away = 0
  let i = 0
  
  while (i < innings) {

    if (home() === true && away() === true) {
      i++
    }

    function away () {
      if(callback() === 0 && callback() === 0 && callback() === 0) {
        Away++
      } else if (callback() === 1 && callback() === 1){
        return true
      }
    }
    
    function home () {
      if(callback() === 0 && callback() === 0 && callback() === 0) {
        Home++
      } else if (callback() === 1 && callback() === 1) {
        return true
      }
    }

    

    
  }
  
  lastInning.Home = Home
  lastInning.Away = Away

  return lastInning
}

console.log(`Task 3`, finalScore(inning, 9))


/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function in a parameter - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function 
  
For example: invoking getInningScore(inning) might return this object:
{
  "Home": 0,
  "Away": 2
}
  */


function getInningScore(callback) {
  const randomScore = {}
  let home = Math.round(callback + Math.random())
  let away = Math.round(callback + Math.random())

  randomScore.Home = home
  randomScore.Away = away

  return randomScore
}

console.log(`Task 4`, getInningScore(inning()))


/* STRETCH: ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function in the first parameter that will take `getInningScore` from Task 4 as its argument
  2. Receive the callback function in a second parameter that will take `inning` from Task 2 as its argument
  3. Receive a number in a third parameter that will take the number of innings to be played as its argument
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score (see the example below).
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
] */
// NOTE: There is no test associated with this code; if your output matches the given example, consider it complete!
function scoreboard(task4, task2, innings) {
  const fullGame = []
  let awayCount = 0
  let homeCount = 0
  for (let i = 1; i <= innings; i++) {
    const eachGame = task4(task2())
    fullGame[i] = `Inning ${i}: Away ${eachGame.Away} - Home ${eachGame.Home}`
    awayCount = awayCount + eachGame.Away
    homeCount = homeCount + eachGame.Home
  }

  if (awayCount === homeCount) {
    fullGame.push(`This game will require extra innings: Away ${awayCount} - Home ${homeCount}`)
  } else fullGame.push(`Final Score: Away ${awayCount} - Home ${homeCount}`)
  
  return fullGame
}

console.log(scoreboard(getInningScore, inning, 10))




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
