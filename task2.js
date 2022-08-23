// count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input from user
const string = prompt('Enter a string: ');

const result = countVowel(string);

alert (`Count of vowels is ${result}`);