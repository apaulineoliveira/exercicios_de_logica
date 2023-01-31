# 🪶 Objetivo
  <p>O objetivo deste repositório é reunir um conjunto de exercícios de lógica de programação utilizando Javascript para aprimorar as habilidades em resolução de   problemas do cotidiano profissional de forma rápida e assertiva.</p> Dentre as subpastas é possível encontrar os sequintes exercícios:<br></br>

<ol>
  <li>Gerar uma sequência de Fibonacci utilizando JS</li>
  <li>Trocar os valores entre as variáveis A e B</li> 
  <li>Média de idades</li>
  <li>Efetuar operações matemáticas</li>
  <li>Conversor de medidas</li>
  <li>Var, let, const (diferenças na prática)</li>
  <li>Recursividade com função Fibonacci</li>
  <li>Destructuring assignment</li>
  <li>Troca de valores com destructuring assignment</li>
  <li>Passando um objeto como parâmetros de uma função</li>
  <li>Operações com vetores</li>
  <li>Loops em Loops</li>
  <li>Condicionais</li>
</ol>
  <p>Ao decorrer do tempo este repositório será preenchido com mais exercícios que considero relevante para exercitar essa parte crucial da programação que é a lógica. É através do desenvolvimento de uma lógica de programação sólida e àgil que conseguimos absorver de forma eficáz qualquer linguagem de programação.

<h2>Sequência de Fibonacci - Utilizando JS</h2>
  <p>A sequência de Fibonacci é uma sequência de números onde o número 1 é o primeiro e segundo termo da ordem, e os demais são originados pela soma de seus antecessores. Fibonacci foi um dos mais importantes matemáticos da idade média, a 'sequência de fiboancci' criada a partir dos estudos sobre reprodução de coelhos, hoje é um dos pilares das operações do mercado financeiro. Suas contribuições surtiram efeito nas mais variadas áreas partindo da biologia até a tecnologia.</p>
<h3>Gerando uma sequência com o loop for</h3>
  <p>Com esta solução é necessário definir dois valores iniciais e a partir disso, será iniciado um loop que irá gerar o resto dos valores adicionando dois valores   anteriores da sequência. Com uma <code>function</code> é possível pré-determinar o número de valores que queremos gerar para a função que irá gerar a sequência.</p> 

<h2>Trocar os valores entre as variáveis A e B</h2>
  <p><b>Escopo</b>: Ler os valores A e B e trocar os valores entre as duas variáveis; a variável A passa a possuir o valor de B e a variável B passa a possuir o valor de A.</p> 
  <ul>
    <li>Utilizei neste projeto o DOM (Document Object Model) para fazer a interação com os arquivos HTML e CSS. </li>
    <li>Optei por um HTML simples e funcional, utilizando <code>inputs</code> para inserir os números que irão posteriormente ser armazenados nas variáveis A e B. E um <code>button</code> <b>Enviar</b> para posteriormente "mandar" os valores para o Javascript.</li>
    <li>No Javascript será criado uma variável adicional que será a responsável por proporcionar a mudança entre os valores A e B. Como poder ser observado no código abaixo:</li><br>
  <code>var c = b;</code> <br>
  <code>var b = a;</code> <br>
  <code>var a = c;</code> <br>
  <code>console.log('Variável A: ' + a);</code> <br>
  <code>console.log('Variável B: ' + b);</code> <br>  
  </ul>

<h2>Média de Idades</h2>
  <p><b>Escopo</b>: Leia as idades de duas crianças, calcule e mostre sua soma e média.</p>
  
<h2>Efetuar operações matemáticas</h2>
<p><b>Escopo</b>: Leia 2 números, efetue as 4 operações matemáticas e mostre os resultados.

<h2>Conversor de medidas</h2>
  <p>Leia uma temperatura em graus Celsius e mostre a mesma em graus Fahrenheit. Exercício solucionado com Javascript.</p>

<h2>Var, let, const (diferenças na prática)</h2>
  <p>Compreendendo que as constantes: <code>const</code>não podem ter seus valores reatribuidos troque os valores do array declarado para [2, 5, 7].
Obs. Não pode alterar o tipo <code>const</code> para let. Pense em uma solução que não haja essa troca.</p><br>
Código base do desafio citado:
<code>const s = [5, 7, 2];</code> <br>
<code>function editInPlace() { </code> <br>
<code>} </code> <br>
<code>editInPlace(); </code>

<br>

<h2>Recursividade com função Fibonacci</h2>
  <h3>Alguns conceitos</h3>
     <li>A sequência de Fibonacci é uma sequência de números onde o número 1 é o primeiro e segundo termo da ordem, e os demais são originados pela soma de seus antecessores. </li>
     <li>A função recursiva é uma função que é definida em termos de si mesma. Ou seja, uma função que "chama" a si mesma. Elas podem ser usadas para poder processar uma determinada operação e geralmente há condições internas para que a recursividades sejam aplicadas (uma vez que sem condições, ela chamaria a si mesmo eternamente, causando o que chamamos de loop infinito. Saiba mais nessa excelente discussão encontrada no <a href="https://pt.stackoverflow.com/questions/186269/o-que-%C3%A9-uma-fun%C3%A7%C3%A3o-recursiva">stack overflow</a>.</li>
     <li>A estrutura de dados pilha diz que o primeiro elemento inserido é o último a ser removido e o último a ser inserido é o primeiro a ser removido. Saiba mais <a href="https://alissonraphaeloliveira.medium.com/algoritmos-e-estrutura-de-dados-pilhas-be817da5d71">neste artigo</a>.</li>
  <h3>Compreendendo o problema</h3>
     <p>Desenvolver um algorítimo (n) que vai retornar o número em questão na sequência de fibonaci.</p>
     <li>Exemplo: Se o <code>n</code> for <b>4</b> o que precisa ser retornado é o número 3, porque o valor 3 está na posição 4 na sequência Fibonacci</li>
     <p>A função recursiva é composta por duas partes:</p>
     
  <ol>
    <li>O caso base; O caso base é o caso de parada. Sem ele a função seria um loop infinito. No problema o caso base é se <code>n</code> for menor ou igual a 2.</li> 
    <p>Perceba os testes abaixo (lembrando que na Fibonacci é necessário a soma dos dois números anteriores):</p>
    <b>f(1)</b> = 1 ↦ Cai na função recursiva<br>
    <b>f(2)</b> = 1 ↦ Cai na função recursiva<br>
    <b>f(3)</b> = f(2) + f(1) = 2 ↦ Porque o f(2) é 1 e o f(1) também é 1<br>
    <b>f(4)</b> = f(3) + f(2) = 2 + 1 = 3 ↦ Porque o f(3) é igual a 2 e o f(2) é igual a 1 <br>
  </ol>
  
<p>A função recursiva então funciona como uma pilha de chamada (estrutura de dados pilha).</p>
<h2>Operações com vetores</h2>
  <p><b>Contexto</b>: A função abaixo receberá 2 parâmetros; um vetor com apenas valores numéricos e um número. Faça com que ela multiplique cada item do vetor pelo segundo parâmetro apenas se o item do vetor for maior que 5. Após isso, ele deverá retornar o novo vetor.</p><br>
  <p>Exemplo: Calcular Vetor <code>([1, 5, 10, 20], 2)</code> retornará: <code>[2, 5, 20, 40]</code> pois só 10 e 20 são <b>maiores</b> que 5.</p><br>    
  <p><b>Segundo exemplo</b>: Calcular Vetor <code>([1, 3, 4, 5], 10)</code> retornará <code>[1, 3, 4, 5]</code> pois nenhum é <b>maior</b> que 5.</p>
  
<h2>Loops em Loops</h2>
  <p><b>Escopo:</b> Complete a função abaixo de forma que ela receba uma variável como parâmetro e retorne um vetor no final. Essa variável passada por parâmetro terá as seguintes propriedades:
  <ul>
    <li>Ela também será um vetor</li>
    <li>Cada um de seus valores serão vetores com números</li>
  </ul>
</p>

<h2>Condicionais</h2>
  <p><b>Escopo</b>: Você foi contratado por uma empresa de desenvolvimento de software que está modificando parte do código de cadastro de novos usuários. Neste cadstro está sendo colocado um limite no tamanho do arquivo da foto que o usuário envia. Caso a foto seja maior que 5MB, será exibida uma mnesagem de erro. Caso contrário, será exbilida uma mensagem de sucesso.</p>

<br>
</br>

# 🪶 Objective
   <p>The purpose of this repository is to gather a set of programming logic exercises using Javascript to improve the skills in solving everyday professional problems quickly and assertively.</p> Among the subfolders it is possible to find the following exercises: <br></br>

<ol>
   <li>Generate a Fibonacci sequence using JS</li>
   <li>Swap the values between variables A and B</li>
   <li>Average ages</li>
   <li>Perform mathematical operations</li>
   <li>Measurement Converter</li>
   <li>Var, let, const (differences in practice)</li>
   <li>Recursion with Fibonacci function</li>
   <li>Destructuring assignment</li>
   <li>Swapping values with destructuring assignment</li>
   <li>Passing an object as parameters to a function</li>
   <li>Operations with vectors</li>
   <li>Loops on Loops</li>
</ol>
   <p>Over time this repository will be filled with more exercises that I consider relevant to exercise that crucial part of programming that is logic. It is through the development of solid and agile programming logic that we can effectively absorb any programming language.

<h2>Fibonacci Sequence - Using JS</h2>
   <p>The Fibonacci sequence is a sequence of numbers where the number 1 is the first and second term of the order, and the others are originated by the sum of their predecessors. Fibonacci was one of the most important mathematicians of the Middle Ages, the 'fiboancci sequence' created from studies on rabbit reproduction, today is one of the pillars of financial market operations. His contributions have had an effect in the most varied areas from biology to technology. </ P>
<h3>Generating a sequence with the for loop</h3>
   <p>With this solution it is necessary to define two initial values and from that, a loop will be started that will generate the rest of the values adding two previous values of the sequence. With a <code>function</code> it is possible to predetermine the number of values we want to generate for the function that will generate the sequence.</p>

<h2>Swap the values between variables A and B</h2>
   <p><b>Scope</b>: Read values A and B and exchange values between the two variables; variable A takes on the value of B and variable B takes on the value of A.</p>
   <ul>
     <li>In this project I used the DOM (Document Object Model) to interact with the HTML and CSS files. </li>
     <li>I opted for a simple and functional HTML, using <code>inputs</code> to insert the numbers that will later be stored in variables A and B. And a <code>button</code> <b>Send< /b> to later "send" the values to Javascript.</li>
     <li>In Javascript an additional variable will be created that will be responsible for providing the change between the values A and B. As can be seen in the code below:</li><br>
   <code>var c = b;</code> <br>
   <code>var b = a;</code> <br>
   <code>var a = c;</code> <br>
   <code>console.log('Variable A: ' + a);</code> <br>
   <code>console.log('Variable B: ' + b);</code> <br>
   </ul>

<h2>Average Age</h2>
   <p><b>Scope</b>: Read the ages of two children, calculate and display their sum and average.</p>
  
<h2>Perform mathematical operations</h2>
<p><b>Scope</b>: Read 2 numbers, perform 4 mathematical operations and display the results.

<h2>Measurement Converter</h2>
   <p>Read a temperature in degrees Celsius and display it in degrees Fahrenheit. Exercise solved with Javascript.</p>

<h2>Var, let, const (differences in practice)</h2>
   <p>Understanding that constants: <code>const</code> cannot have their values reassigned change the declared array values to [2, 5, 7].
Obs. You cannot change the type <code>const</code> to let. Think of a solution that doesn't have this switch.</p><br>
Base code of the mentioned challenge:
<code>const s = [5, 7, 2];</code> <br>
<code>function editInPlace() { </code> <br>
<code>} </code> <br>
<code>editInPlace(); </code>

<br>

<h2>Recursion with Fibonacci function</h2>
   <h3>Some concepts</h3>
      <li>The Fibonacci sequence is a sequence of numbers where the number 1 is the first and second term of the order, and the others are originated by the sum of their predecessors. </li>
      <li>A recursive function is a function that is defined in terms of itself. That is, a function that "calls" itself. They can be used to be able to process a given operation and there are often built-in conditions for the recursion to be applied (since without conditions it would call itself forever, causing what we call an infinite loop. Learn more in this excellent discussion found on <a href="https://pt.stackoverflow.com/questions/186269/what-%C3%A9-uma-fun%C3%A7%C3%A3o-recursive">stack overflow</a>. </li>
      <li>The stack data structure says that the first element inserted is the last to be removed and the last element to be inserted is the first to be removed. Learn more <a href="https://alissonraphaeloliveira.medium.com/algoritmos-e-estrutura-de-dados-pilhas-be817da5d71">in this article</a>.</li>
   <h3>Understanding the problem</h3>
      <p>Develop an algorithm (n) that will return the number in question in the fibonaci sequence.</p>
      <li>Example: If <code>n</code> is <b>4</b> what needs to be returned is the number 3, because the value 3 is at position 4 in the Fibonacci sequence</li>
      <p>The recursive function consists of two parts:</p>


<ol>
     <li>The base case; The base case is the halting case. Without it the function would be an infinite loop. In the problem the base case is if <code>n</code> is less than or equal to 2.</li>
     <p>Understand the tests below (remembering that in Fibonacci the sum of the two previous numbers is necessary):</p>
     <b>f(1)</b> = 1 ↦ Falls into the recursive function<br>
     <b>f(2)</b> = 1 ↦ Falls into the recursive function<br>
     <b>f(3)</b> = f(2) + f(1) = 2 ↦ Because f(2) is 1 and f(1) is also 1<br>
     <b>f(4)</b> = f(3) + f(2) = 2 + 1 = 3 ↦ Because f(3) equals 2 and f(2) equals 1 <br>
   </ol>
  
<p>The recursive function then works like a call stack (stack data structure).</p>
<h2>Operations with vectors</h2>
   <p><b>Context</b>: The function below will receive 2 parameters; a vector with only numerical values and a number. Have it multiply each array item by the second parameter only if the array item is greater than 5. After that it should return the new array.</p><br>
   <p>Example: Calculate Vector <code>([1, 5, 10, 20], 2)</code> will return: <code>[2, 5, 20, 40]</code> because only 10 and 20 are <b>greater</b> than 5.</p><br>
   <p><b>Second example</b>: Calculate Vector <code>([1, 3, 4, 5], 10)</code> will return <code>[1, 3, 4, 5]</code> as none is <b>greater</b> than 5.</p>
  
<h2>Loops on Loops</h2>
   <p><b>Scope:</b> Complete the function below so that it takes a variable as a parameter and returns a vector at the end. This variable passed as a parameter will have the following properties:</p>
   <ul>
     <li>It will also be a vector</li>
     <li>Each of your values will be vectors with numbers</li>
   </ul>



