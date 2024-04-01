
 //! (Honestly Hamida ukimark hii question 3 sikuwa na jua kitu ilibidi nitumie gpt juu singewacha blank tena nilitafuta mtu anisaidie hakuwana wenye walikuwa wanajua kufanya)  



// Function to check if a number is prime
function isPrime(n) {
    // Numbers less than or equal to 1 are not prime
    if (n <= 1) return false;
    
    // Check divisibility from 2 up to n - 1
    for (let i = 2; i < n; i++) {
        // If n is divisible by any number in this range, it's not prime
        if (n % i === 0) return false;
    }
    
    // If n is not divisible by any number in the range, it's prime
    return true;
}

// Function to filter prime numbers from an array
function filterPrimes(numbers) {
    // Use Array.filter() to create a new array containing only prime numbers
    return numbers.filter(num => isPrime(num));
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filterPrimes(inputArray);
console.log(result); // Output: [2, 3, 5, 7]
