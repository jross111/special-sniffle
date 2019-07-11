# Regular Expressions


* [`test()` Method](#test()-method)
* [Checking for multiple matches using `|`](#Checking-for-multiple-matches-using-|)
* [Ignore Case Flag `/i`](#ignore-case-flag-/i)
* [Extracting Matches with `.match()`](#Extracting-Matches-with-.match())
* [Return all matches flag `/g`](#Return-all-matches-flag-/g)
* [Wild card period](#wild-card-period)


## `test()` Method
The `test()` method applies a regular expression to a string and returns `true` or `false`.  

`/Hello/` will check whether or not a string contains "Hello".  (hello or HELLO will not match)

```javascript
let string1 = "Hello World";
let string2 = "Goodbye Jamie";
let regex = /Hello/;

regex.test(string1)  //true
regex.test(string2) //false
```
***
## Checking for multiple matches using `|`

`|` serves as an 'or' operator in regex.

```javascript
let string = "jamie has a pet dog.";
let regex = /bird|dog|cat|fish/;

regex.test(string) // true
```
## Ignore Case Flag `/i`

Appending `/i` to an expression will ignore the case.
```javascript
let string = "Jamie Ross";
let regex = /JAMIE/i;

regex.test(string); // true
```
***
## Extracting Matches with `.match()`

`.match()` method can be applied to a string with the regex as the argument.

```javascript
  let string = "hello my name is Jamie"
  let regex = /jamie/i

  string.match(regex) // returns "Jamie"
  ```
***
  ## Return all matches flag `/g`

  ```javascript
  let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;

twinkleStar.match(starRegex); // returns ["Twinkle", "twinkle"]
```
***
## Wild card period

A `.` serves as a wildcard.

```javascript
let str = "He's such a mad lad";
let regex = /.ad/;
let result = regex.test(str); //true