// Write a function that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.


function changingTheFirstletters(string) {
    // Split the input string into an array of characters by using (split)
    let chars = string.split('');

    // Repeat through each character in the array
    for (let i = 0; i < chars.length; i++) {
        // Check if the character is uppercase
        if (chars[i] === chars[i].toUpperCase()) {
            // If it's uppercase, convert it to lowercase and update the array element
            chars[i] = chars[i].toLowerCase();
        } else {
            
            chars[i] = chars[i].toUpperCase();
        }
    }

    // Join the array of characters back into a string by using (join)
    let swappedStr = chars.join('');

    // Return the swapped string
    return swappedStr;
}

//  An Example 
let example = 'The Quick Brown Fox';
let anser= changingTheFirstletters(example);
console.log(anser); 
