# Bobby Conversation Notes

## Coding Problem Feedback

Overall, good job. I would recommend moving forward with an interview.

Coding comments:

* Don't be afraid to ask questions for the problem brief. This usually impresses interviewers.
* Keep making the implementations modern.
* Clean up the whitespace.
* Remove the end comments.
* Add a testing framework. You should use Jest.
* Consider using `map`.
* Make you you've replaced the boilerplate `test` command from your package.json file.
* Pump documentations through Grammarly.

``` js
const A_CHAR_CODE = "a".charCodeAt(0)

/**
 * Increment a single character by one. If the character is a "z", wrap it to "a".
 * @param character The character to increment.
 * @return Returns the incremented character.
 */
function incrementCharacter(character) {
  let characterCode = character.charCodeAt(0)
  return String.fromCharCode((characterCode + 1 - A_CHAR_CODE) % 26 + A_CHAR_CODE);
}

/**
 * ...
 */
function shiftString(string) {
  return string
    .replace(/[^a-z]/i, "")
    .split("")
    .map(incrementCharacter)
    .join("");
}

process.stdout.write(`${ shiftString(process.argv[2]) }\n`);
```

## Known/Unknown Matrix

We need to focus on moving unknown unknowns into known knowns.

## Book Recommendations

* Pragmatic Programmer
* Clean Coding
* Programming Interviews Exposed
* Mindset (psychology)

Other links:

* https://davidwalsh.name/regular-expressions-rest

## Goal

**Ultimate goal:** Make the consultancy had in the past more viable and more in line with full stack
development/design and mobile apps development/design.

**Short-term goal:** Find a good junior development position, preferably remote.

## Resume Feedback

* Don't be afraid to break one page or other conventions *if* you think it's appropriate.
* Create a summary section.
* Consider resume language.
* Don't be afraid to create multiple copies of your resume for different jobs. Carry the different
  versions in a leather folder so that you can grab the one you think is most relevant to the
  current situation.
* Cater your resume to the specific summary. Rearrange skills and experience to help strengthen that
  summary.

## Steps

- [x] Do screener problem.
- [x] Get feedback on screener problem.
- [x] Review resume together.
- [ ] Do interview problem.
- [ ] Do screener interview with Landon's boss.
- [ ] Do mock interview.
- [ ] Do practice problems on Exercism.
- [ ] Take a look at process for applying for jobs.
- [ ] Check out this website: https://www.covid19hiring.co/
- [ ] Apply for a bunch of jobs.
