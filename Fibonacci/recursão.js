function fibonacciRecursive(n) {
	if (n <= 2) return 1
   return fibonacciRecursive (n-1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(4)) //3

