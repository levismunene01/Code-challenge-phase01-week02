//Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].

function numberRange(start, end) {
    // Create an empty array to put the number range
    let result = [];
    // Check if the range is from a smaller number to a bigger 
    if (start <= end) {
    // If it is then loop it from start to end
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    } else {
    //then If its from bigger to smaller loop in the other wayround
    for (let i = start; i >= end; i--) {
       result.push(i);
    }
    }
 
    return result;
    }
    
    //An example
    console.log(numberRange(4, 7)); 
   