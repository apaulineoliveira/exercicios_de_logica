function GenerateFibonacci(number) {
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  
  for (let i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }

  return fibonacci;
  }

  let result = GenerateFibonacci(20);
  console.log(result);
  