// Define a function expression that takes an array called 'path' as a parameter.
function expression(path) {
    // Create an object 'operators' to map operator names to their corresponding symbols.
    const operators = { "plus": "+", "minus": "-", "into": "*", }
    // Initialize an empty string 'ex' to store the resulting expression.
    let ex = ""
    // Iterate through each element in the 'path' array.
    path.forEach(element => {
        // Check if 'element' is a valid operator.
        const value = operators[element]
        // If 'element' is not a valid operator, add it to the 'ex' string.
        if (value == undefined) {
            ex += element
        }
        // If 'element' is a valid operator, add its corresponding symbol to the 'ex' string.
        else {
            ex += value
        }
    });
    // Return the resulting expression 'ex'.
    return ex
}
// Export the 'expression' function to make it accessible from other modules.
module.exports = expression;
