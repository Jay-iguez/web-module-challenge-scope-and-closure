# Scope and Closure Challenge

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## JavaScript Foundations

## Scope and Closures

## Objectives

- Explain function scope
- Describe what closure is, how closure is created in a program and why it is important to understand closures in JavaScript  

## Introduction

This challenge focuses on both scope and closures.

In this challenge you will be working to build a `scoreboard` (in the console) that takes randomly generated data and keeps track of a game's progress. If you're not familiar with the rules of baseball what you need to know is this: there are 9 innings and teams take turns "at-bat." Teams can only score while they are at bat. A team stops being at bat once they have gotten 3 `outs` by either striking out or through game play. You can read more about baseball rules [here](https://www.rulesofsport.com/sports/baseball.html).

A scoreboard in a major league stadium looks something like this. In fact, the scoreboard at Fenway Park in Boston is actually quite famous. 

![Fenway Scoreboard](https://storage.googleapis.com/afs-prod/media/media:e959506330fd4e5890023c93cfbaac55/800.jpeg)

There are layers upon layers of nested functions within the game of baseball. Your challenge today will be to work through tasks associated with these layers, and ultimately to produce a scoreboard that logs in the console.

## Instructions

### Task 1: Set up Project

Using VSCode and Command Line:


1. Fork the repo
2. Go into canvas and connect your reop to codegrade
3. Clone your forked version of the repo
4. DO NOT CREATE A BRANCH. You will be pushing your changes to the main/master today
5. cd into your repo
6. open the terminal in your vs code and type `npm install`
7. next type `npm run test` in your terminal
8. Complete your work making regular commits to main/ master your codegrade score will update each time you make a push.


### Task 2a - MVP code

Find the file `index.js` and complete all tasks.

### Testing & Debugging

Open a second terminal inside of your project by clicking on the split terminal icon
![alt text](assets/split_terminal.png "Split Terminal")

Inside of your second terminal type `npm start` 
![alt text](assets/npm_start.png "type npm start")

You will be running your tests in one terminal and debugging in the other. As you work on your code you should make use of `console.log` to check your progress and debug.
![alt text](assets/tests_debug_terminal_final.png "your terminal should look like this")


### Task 2b - Written questions

Edit the `ReadMe` file with your answers to the questions below.

1. In your own words, define closure (1-2 sentences). 
Closure happens when an inner/nested function references a variable/function outside of its own scope. 
2. Study the following code, then answer the questions below.

```js
function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();
```

a. Where is closure used in this code? How can you tell?
The closure happens when the anonymous function within "personalDice" references the private variable or parameter "name". I can tell because witin the scope of the anonymous function, "name" doesn't exist. So it looks outside of its own scope to find it.
b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?
The parameter "name" is always going to stay the same unless you were to pass in another argument such as "Vincent". What is changing is the "newRoll" variable, outputting a number between 1 and 6.
c. What is the lexical scope of `newRoll`? 
The lexical scope of "newRoll" is the scope of the anonymous function that is returned by "personalDice".


### Task 3 - Stretch Goals

After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

See if you can complete one or more of the following challenges:

1. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

2. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

Functional programming is an environment or paradigm that a developer utilizes to create a program that which its code follows an immutable set of directions/functions that results in clear and easy to understand code.

OOP is an environment or paradigm that a developer utilizes to create a program that which its code or set of directions can change at the developers will and be easily manipulated to receive and output a variety of information.

The pros of functional programming allows a developer to have clear and concise code from the start and to the end. It easily enables de-bugging to a great degree, and can result in very optimized code.

The pros of OOP allows a developer to manipulate the variables their programs recieves and shape how the program will determine what to do with said information. It can lead to very inclusive code for different applications.

The cons of functional programming can be difficult to alter code. In order to have the information passed to a pure function changed or even the result, you would need to also change the entire program in succession.

The cons of OOP programming can be code that's not as easily read and can be difficult to de-bug with variables/functions changing as the program runs. It also can result in much more code to do what the program is intended for.

## Resources

📚 [Scope and Closures Guide](https://css-tricks.com/javascript-scope-closures/)

🧠 ["I never Understood Closures" Blog](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

## Submission format

Please submit your project via codegrade by following [these instructions](https://bloomtech.notion.site/bloomtech/BloomTech-Git-Flow-Step-by-step-269f68ae3bf64eb689a8328715a179f9) See part 2, submitting an assignment with codegrade
