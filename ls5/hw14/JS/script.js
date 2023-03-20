function spinWords(string) {
    let words = string.split(' ');
    let reverseWord = words.map(function (word) {
        return word.length >= 5 ? word.split('').reverse().join('') : word;
    })
    let reverseString = reverseWord.join(' ');
    console.log(reverseString);
}

spinWords('Hey fellow warriors');

