// Function to find the maximum element in an array
function findMaxElement(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
}

// Example usage
const numbers = [3, 1, 7, 9, 4, 2, 6];
const maxNumber = findMaxElement(numbers);
console.log("Maximum element in the array:", maxNumber);
