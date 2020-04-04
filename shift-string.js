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

const shiftString = (string) => {

    let shiftedString = '';

    for (let index = 0; index < string.length; index++)  {

        // Increment each character code by 1:

        let shiftedChar = string.charCodeAt(index) + 1;

        shiftedString += String.fromCharCode(shiftedChar);

    }  // end for

    console.log('Shifted String: ', shiftedString, '\n');

 }; // end shiftString()

 // IMPORTANT: shiftString() is not suitable for strings that contain carriage returns or spaces
 // because the algorithm does not take into account what their shifted values are. 

 console.log('\nshiftString() DEMO:');
 console.log('==================\n');

 // Example 1:
 
 const myName = 'Bobby';

 console.log('\nEXAMPLE 1: myName');
 console.log('-----------------\n');
 console.log(`Original String: ${myName}\n`);

 shiftString(myName);

 // Example 2:

 const curiosity = 'Curiosity';

console.log('\nEXAMPLE 2: curiosity');
console.log('--------------------\n');
console.log(`Original String: ${curiosity}\n`);

shiftString(curiosity);

console.log();
