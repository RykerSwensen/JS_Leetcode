// First, let's create a prompt to get the input.
// We are using a string to get the word. 
// We will set str = to the prompt.
let str = prompt("Please enter a word");

function AlphabetSoup(str) { 
    
    // Split the string into an array of characters. 
    // We can do this using the split function.
    const arrayOfChars = str.split('');

    // Sort the array of characters alphabetically.
    // We can do this using the sort function.
    const sortedArrayOfChars = arrayOfChars.sort();

    // Join the array of characters back into a string.
    // We can do this using the join function.
    const sortedString = sortedArrayOfChars.join('');

    // Return the sorted string.
    return sortedString;
}

// Use console.log to print the output.
console.log(AlphabetSoup(str));