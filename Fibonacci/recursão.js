function fibonacciRecursive(n) {
	if (n <= 2) return 1
   return fibonacciRecursive (n-1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(4)) //3
console.log(fibonacciRecursive(5)) //5
console.log(fibonacciRecursive(6)) //8
console.log(fibonacciRecursive(7)) //13

