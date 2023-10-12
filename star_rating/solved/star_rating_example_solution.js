// First, let's create a prompt to ask the user for their star rating.
// We are using a string to get their rating. 
// We will set str = to the prompt.
let str = prompt("What's your star rating?");

// This is the function we are given.
export const starRating = (str) => {

    // Now, let's think about how we can solve this problem.
    // Initially, we think that we will divide each variety of rating
    // into a loop. We can do this, though we need to be careful
    // about how we do this.
    // We don't want any nested loops, because that would be O(n^2).
    // We also don't want to have to write out 5 different loops.
    // Instead, we can use a conditional statement.

    // First, we need to split the string into two parts.
    // We can do this by using the split function. 
    // We will split the string at the decimal point.
    // This will give us two strings, one before the decimal point,
    // and one after.
    // We will store these two strings in variables.
    // The variables are int for interger, and dec for decimal.\
    // Let declares reassignable variables.
    let [interger, decimal] = str.split('.')
    let int = Number(interger)
    let dec = Number(decimal)

    // Now, we can use a conditional statement to determine
    // how many stars we need to display.
    // If the decimal is greater than 0 and less than or equal to 50,
    // we will display a half star.
    if(dec > 0 && dec <= 50) {
        dec = 1

    // If the decimal is > 50, we will display a full star.
    // To do this we will set the decimal to 0, and add 1 to the integers.
    } else if (dec > 50) {
        dec = 0
        int++
    }

    // Now, let's edit the return statement we were given.
    // We need to return full for intergers, half for decimals, and empty for the rest.
    // We can do this by using the repeat function.
    // The repeat function will repeat a string for as many intergers or decimals it is given.
    // For empty, we will need to subtract the intergers and decimals from 5 to get the 
    // number of empty stars.
    // It will then repeat empty for as many stars are empty.
    return "full ".repeat(int) + "half ".repeat(dec) + "empty ".repeat(5 - int - dec);
    
}
// Now, let's console log the function so we can test our solution.
// We will pass this into a HTML file, so we can use the prompt and window console.w
console.log(starRating(str));