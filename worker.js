// worker.js
onmessage = function(e) {
   const startNumber = e.data.start;
   const endNumber = e.data.end;
   const primeNumbers = findPrimesInRange(startNumber, endNumber);
   postMessage(primeNumbers);
 };
 
 function isPrime(num) {
   if (num <= 1) return false;
   for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i === 0) {
       return false;
     }
   }
   return true;
 }
 
 function findPrimesInRange(start, end) {
   const primeNumbers = [];
   for (let i = start; i <= end; i++) {
     if (isPrime(i)) {
       primeNumbers.push(i);
     }
   }
   return primeNumbers;
 }
 