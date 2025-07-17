function reverseString(str) {
  return str.split('').reverse().join('');
}
function countCharacters(str) {
  return str.length;
}
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
function findMaximum(arr) {
  return Math.max(...arr);
}

function findMinimum(arr) {
  return Math.min(...arr);
}
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Example usage:
// filterArray([1, 2, 3, 4], x => x % 2 === 0);  // returns [2, 4]
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function fibonacciSequence(terms) {
  if (terms <= 0) return [];
  if (terms === 1) return [0];
  
  const sequence = [0, 1];
  while (sequence.length < terms) {
    const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(next);
  }
  return sequence;
}
