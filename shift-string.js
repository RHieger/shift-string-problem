/**
 *
 * shiftString function
 * 
 * Solution to Problem Proposed by Landon Schropp
 * 
 * Robert Hieger
 *  
*/

/**
 * 
 * PROBLEM AS STATED BY LANDON SCHROPP:
 * 
 * Write a function that shifts each letter in a string forward one character.
 * For example, the string "abc" should be shifted to "bcd" and the string
 * "bobby" should be shifted to "cpccz".
 * 
 */

 // MY SOLUTION:

 // NOTE: My intention is to use modern JavaScript (latest standard) with Node.js
 // to allow standalone script execution. It is therefore necessary to have at
 // least the current LTS distribution of Node.js installed in order to run
 // this script as intended.

 // URL for Node.js: https://nodejs.org/en/
// FIRST TEST CODE:

const exampleOne = String('Bobby');

console.log(
    `const exampleOne = ${exampleOne}\n`
);

for (let index = 0; index < exampleOne.length; index++)  {

   console.log('The character code at exampleOne[' + index + '] is ' + exampleOne.charCodeAt(index));

}  // end for

console.log();

// FIRST ATTEMP SHIFTING CHARACTERS OF STRING:

 let shiftString = (string) => {

    for (let index = 0; index < string.length; index++)  {

        // Increment each character code by 1:

        let shiftedChar = string.charCodeAt(index) + 1;

        console.log(shiftedChar);

    }

 };

 shiftString(exampleOne);