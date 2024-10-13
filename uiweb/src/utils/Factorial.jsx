export function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers"; // Optional: Handle negative numbers.
    }
    let result = 1; // Start with 1, since multiplying by 1 has no effect.
    for (let i = 2; i <= n; i++) { // Start from 2 to n
        result *= i; // Multiply result by i
    }
    return result; // Return the final result
}

