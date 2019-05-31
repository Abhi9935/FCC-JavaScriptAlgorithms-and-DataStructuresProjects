## FreeCodeCamp : JavaScript Algorithms-and-DataStructures Projects
###### author: [**Abhinav Kushwaha (Baba Albus)**](http://babaalbus.com/ "http://babaalbus.com/")
---
## FreeCodeCamp Projects <img align="right" width="150" height="150" src="https://s3.amazonaws.com/freecodecamp/curriculum-diagram-full.jpg">
1. [Palindrome Checker](https://github.com/Abhi9935/FCC-JavaScriptAlgorithms-and-DataStructuresProjects/blob/master/PalindromeChecker.js)
2. [Roman Numeral Converter](https://github.com/Abhi9935/FCC-JavaScriptAlgorithms-and-DataStructuresProjects/blob/master/RomanNumeralConverter.js)
3. [Caesars Cipher](https://github.com/Abhi9935/FCC-JavaScriptAlgorithms-and-DataStructuresProjects/blob/master/Caesars%20Cipher.js)
4. [Telephone Number Validator](https://github.com/Abhi9935/FCC-JavaScriptAlgorithms-and-DataStructuresProjects/blob/master/Telephone_Number_Validator.js)
5. [Cash Register](https://github.com/Abhi9935/FCC-JavaScriptAlgorithms-and-DataStructuresProjects/blob/master/Cash_Register.js)
---
### Problems
## 1. [JavaScript Algorithms and Data Structures Projects: Palindrome Checker](https://github.com/Abhi9935/FCC-JavaScriptAlgorithms-and-DataStructuresProjects/blob/master/PalindromeChecker.js)
Return `true`if the given string is a palindrome. Otherwise, return `false`.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Note**  
You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `"racecar"`, `"RaceCar"`, and `"race CAR"`among others.

We'll also pass strings with special symbols, such as `"2A3*3a2"`, `"2A3 3a2"`, and `"2_A3*3#A2"`.

Remember to use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if you get stuck. Write your own code.
## 2. [JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter](https://github.com/Abhi9935/FCC-JavaScriptAlgorithms-and-DataStructuresProjects/blob/master/RomanNumeralConverter.js)
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
## 3. [JavaScript Algorithms and Data Structures Projects: Caesars Cipher](https://github.com/Abhi9935/FCC-JavaScriptAlgorithms-and-DataStructuresProjects/blob/master/Caesars%20Cipher.js)
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
## 4. [Telephone Number Validator]()
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
```
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
## 5. [Cash Register]()
Design a cash register drawer function `checkCashRegister()`that accepts
purchase price as the first argument (`price`), payment as the second
argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid`is a 2D array listing available currency.

The `checkCashRegister()`function should always return an object with
a `status`key and a `change`key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}`if cash-in-drawer is
less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}`with cash-in-drawer as the
value for the key `change`if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due
in coins and bills, sorted in highest to lowest order, as the value of
the `change`key.

Remember to
use [Read-Search-Ask](http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514) if
you get stuck. Try to pair program. Write your own code.

| Currency Unit 	| Amount 	|
|---------------------	|--------------------	|
| Penny 	| $0.01 (PENNY) 	|
| Nickel 	| $0.05 (NICKEL) 	|
| Dime 	| $0.1 (DIME) 	|
| Quarter 	| $0.25 (QUARTER) 	|
| Dollar 	| $1 (DOLLAR) 	|
| Five Dollars 	| $5 (FIVE) 	|
| Ten Dollars 	| $10 (TEN) 	|
| Twenty Dollars 	| $20 (TWENTY) 	|
| One-hundred Dollars 	| $100 (ONE HUNDRED) 	|
