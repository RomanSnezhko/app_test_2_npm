/*
7 kyu Reverse words

Description:

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Solution:
*/
function reverseWords (str) {
// Go for it
//split words into seperate arrays
    return str.split("").reverse().join("").split (" ").reverse().join(" ");
}

/*
8 kyu Stringy Strings

Description:

write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

Solution:
*/
function stringy(size) {
    let string = '';
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            string += '1'
        } else {
            string += '0';
        }
    }
    return string;
}

/*
8 kyu Find numbers which are divisible by given number

Description:

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)

[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

Solution:
*/
function divisibleBy(numbers, divisor){
    return numbers. filter ((number) => number % divisor === 0)
}


/*
8 kyu Name Shuffler

Description:

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

Solution:
*/
function nameShuffler (str){
    let [first, last] = str. split(' ')
    return last + ' ' + first
}

/*
8 kyu Plural

Description:

We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.

Solution:
*/
function plural(n) {
    return n !== 1;
}

/*
8 kyu Pole Vault Starting Marks

Description:

For a pole vaulter, it is very important to begin the approach run at the best possible starting mark. This is affected by numerous factors and requires fine-tuning in practice. But there is a guideline that will help a beginning vaulter start at approximately the right location for the so-called "three-step approach," based on the vaulter's body height.

This guideline was taught to me in feet and inches, but due to the international nature of Codewars, I am creating this kata to use metric units instead.

You are given the following two guidelines to begin with: (1) A vaulter with a height of 1.52 meters should start at 9.45 meters on the runway. (2) A vaulter with a height of 1.83 meters should start at 10.67 meters on the runway.

You will receive a vaulter's height in meters (which will always lie in a range between a minimum of 1.22 meters and a maximum of 2.13 meters). Your job is to return the best starting mark in meters, rounded to two decimal places.

Hint: Based on the two guidelines given above, you will want to account for the change in starting mark per change in body height. This involves a linear relationship. (If you're not clear on that, search online for "linear equation.") But there is also a constant offset involved. If you can determine the rate of change described above, you should be able to determine that constant offset.

Solution:
*/

function startingMark(bodyHeight){
    // Remember: Body height of 1.52 m --> starting mark: 9.45 m
    //           Body height of 1.83 m --> starting mark: 10.67 m
    // All other starting marks are based on these guidelines!

    var m = (10.67 - 9.45) / (1.83 - 1.52);
    return Math.round((10.67 + m * bodyHeight - m * 1.83) * 100) / 100;


    /*
7 kyu Friend or Foe?

Description:

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []
Input strings will only contain letters. Note: keep the original order of the names in the output.

Solution:
    */

    const friend = friends => friends. filter(element => element. length == 4)

    /*
    8 kyu Remove duplicates from list

    Description:

    MDefine a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

    Solution:
        */
    function distinct(a) {
        return [...new Set (a)];

/*
7 kyu Vowel Count

Description:

eturn the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

Solution:
*/
        function getCount (str) {
            return (str.match(/[aeiou]/ig) ||[]) .length;
        }

/*
7 kyu Categorize New Member

Description:

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

Solution:
*/

        function openOrSenior (data){
            return data.map (([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
        }

/*
7 kyu Remove All The Marked Elements of a List

Description:

Define a method/function that removes from a given array of integers all the values contained in a second array.

Solution:
*/
        Array.prototype.remove_ = (integer_list, values_list) =>
            integer_list. filter (element => !values_list. includes(element));
/*
7 kyu Triangular Treasure

Description:

riangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0

Solution:
*/
        const triangular = n => n > 0? n*(n+1)/2:0
/*
7 kyu

Description:



Solution:
*/
        "use strict";


        function insertDash(num) {
            const temp = num.toString().split("");

            for(let i = 0; i < temp.length; i++) {
                let current = temp[i],
                    next    = temp[i + 1];
                if(current % 2 !== 0 && next % 2 !== 0 && next) temp[i] = `${current}-`;
            }

            return temp.join("");
        }
/*
7 kyu Remove anchor from URL

Description:
Complete the function/method so that it returns the url with anything after the anchor (#) removed.


Solution:
*/
        const removeUrlAnchor = url => url.replace(/#.+/i, "");
/*
7 kyu Сountdown to Christm

Description:

Polly is 8 years old. She is eagerly awaiting Christmas as she has a bone to pick with Santa Claus. Last year she asked for a horse, and he brought her a dolls house. Understandably she is livid.

The days seem to drag and drag so Polly asks her friend to help her keep count of how long it is until Christmas, in days. She will start counting from the first of December.

Your function should take 1 argument (a Date object) which will be the day of the year it is currently. The function should then work out how many days it is until Christmas.

Watch out for leap years!

Solution:
*/
        function daysUntilChristmas(days) {
            let year  = days.getFullYear(),
                given = days.getTime() / 1000,
                final = new Date(year, 11, 25, 0, 0, 0) / 1000,
                loopGiven = null;

            if(given > final) {
                loopGiven = new Date(year + 1, 11, 25, 0, 0, 0) / 1000;
                return Math.abs((final - loopGiven) / 86400) - Math.abs((final - given) / 86400);
            }

            return Math.abs((final - given) / 86400);
        }
/*
6 kyu Which are in?

Description:

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of
a1 which are substrings of strings of a2.

Solution:
*/

/*
7 kyu Multiply list by integer (with restrictions)

Description:

DESCRIPTION:

Task:

Given a list of integers l, return the list with each value multiplied by integer n.

Restrictions:

The code must not:

contain *.
use eval() or exec()
contain for
modify l
Happy coding :)

Solution:
*/
        function multiply(mult, array) {
            return array.map(item => Math.round( mult / (1 / item )));
        }
/*
7 kyu

Description:



Solution:
*/

/*
7 kyu

Description:



Solution:
*/

/*
7 kyu

Description:



Solution:
*/

/*
7 kyu

Description:



Solution:
*/

/*
7 kyu

Description:



Solution:
*/