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