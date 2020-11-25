forEach

// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

function doubleValues(arr) {
    let doubledArr = []
    arr.forEach(val => {
        doubledArr.push(val * 2);
    });
    return doubledArr;   
}

// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
function onlyEvenValues(arr) {
    let mappedArr = [];
    arr.forEach(val => {
        if (val % 2 == 0) {
            mappedArr.push(val);
        }
    });
    return mappedArr;
}

// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
function showFirstAndLast(arr) {
    let firstLastArr = [];
    arr.forEach(word => {
        firstLastArr.push(word[0] + word[word.length - 1]);
    });
    return firstLastArr;
}

// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object
function addKeyAndValue(arr, key, value) {
    arr.forEach(ele => {
        ele[key] = value;
    });
    return arr;
}

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(str) {
    let splitStr = str.split('');
    let obj = {};
    const vowels = 'aeiou'
    splitStr.forEach(s => {
        let lower = s.toLowerCase();
        if(vowels.indexOf(lower) !== -1) {
            if(obj[lower]) {
                obj[lower]++; 
            } else {
                obj[lower] = 1;
            }
        }

    });
    return obj;
}


map 

// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
function doubleValuesWithMap (arr) {
    arr.map(val => {
        return val * 2;
    });
}

// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

function valTimesIndex(arr) {
    arr.map((val, i) => {
        return val * i;
    });
}

// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

function extractKey(arr, key) {
    arr.map(val => {
        return val[key];
    });
}

// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

function extractFullName(arr) {
    arr.map(val => {
        return val.first + " " + val.last;
    });
}


filter 

// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

function filterByValue(arr, key) {
    arr.filter(val => {
        return val[key] !== undefined;
    });
}

// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find(arr, val) {
    arr.filter(ele => {
        return ele === val;
    })[0];
}

// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

function findInObj(arr, key, val) {
    arr.filter (ele => {
        return ele[key] === val;
    })[0];
}

// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

function removeVowels(str) {
    let vowels = 'aeiou';
    str.split('')
    .toLowerCase().filter(s => {
        return vowels.indexOf(s) === -1;
    }).join("");
}

// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

function doubleOddNumbers(arr) {
    arr.filter(num => {
        return num % 2 !== 0;
    }).map(n => {
        return n * 2;
    });
}



