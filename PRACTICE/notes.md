## Book 1 Chapter 3

Datatypes:

boolean // true or false
string //
number // value between -2^1024 to 2^1024
bigInt // add n to the end of the number to convert it easily 32489032840932n
undefined // declared variable but uninitialized
NaN // Not a Number, impossible math operation result
Symbol // Used to create unique identifiers in javascript: symbol1===symbol2 ret false
Object // Objects are containers for related data and functionality
Array // Arrays are used to store lists of items using a single name

useful commands:
.charAt(x); // tells you what char is at index x
.indexOf('e'); // searches the string and returns the first index value matching 'e'
.split(','); // splits a string into an array of substrings at ','
.substring(12,4); // extracts chars of a string between 2 specifiex positions
.slice(4,12); // same as substring, but returns empty if the second is larger than the first
.replace('FORTRAN','javascript'); // Replaces a string with another string
.toLowerCase(); // returns a string with all the characters converted toLowerCase
.toUpperCase(); // returns a string with all the characters converted toUpperCase
parseInt(5.2343); // converts a number to an int by discarding anything after the decimal
parseFloat(10.00); // converts string to decimal value

Javascript special characters
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f formfeed
`${}` template literal

object syntax:
car {
paint: blue,
make: ford,
};

array syntax:
const favoriteCities = [
'Rome',
'NewWork',
];

## Book 1 Chapter 4: Operators and expressions

== Equality 3 == "3" // true
!= Inequality 3 != 3 // false
=== Strict Equality 3 === "3" // false
!== Strict inequality 3 !== "3" // true

## Book 1 Chapter 5: Controlling Flow
if (country === "United States" || country === "Liberia"){
    temperature = temperature + "F";
} else {
    temperature = (temperature - 32) * 5 / 9 + "C";
}

msg = hours < 12 ? ('Good Morning') : ('Welcome');

switch(expressions){
    case x:
    case y:
    default:
}

## Book 1 Chapter 6: Arrays
const colors = ['red', 'green', 'blue'];

new Array();
const myArray = new Array();
const myArray = new Array('January','February','March');
customerDataArray = customerData.split(',');

Javascript Array Methods
    concat()     A new array made up of the current array, joined with other arrays and/or values
    every()     True if every element in the given array satisfies the provided testing function
    filter()    A new array with all the elements of a current array that test true by the given function
    forEach()   completes the function once for each element in the array
    includes()  Determines whether an array includes a specified value and returns true or false
    indexOf() Finds the first occurrence of the specified value within the array; returns -1 if the value is not found
    join()      joins all elements of an array into a string
    lastIndexOf()   finds the last occurrence of the specified value within the array; returns -1 if the value is not found
    map()       creates a new array with the result of a provuded fuybctu

