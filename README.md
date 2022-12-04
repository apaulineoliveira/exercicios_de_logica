# exercicios_de_logica
Compilado de exercícios de lógica de programação utilizando Javascript.
# 🪶 Objetivo
<p>O objetivo deste repositório é reunir um conjunto de exercícios de lógica de programação utilizando Javascript para aprimorar as habilidades em resolução de problemas do cotidiano profissional de forma rápida e assertiva.</p> Dentre as subpastas é possível encontrar os sequintes exercícios:<br></br>

<ul>
  <li>Gerar uma sequência de Fibonacci utilizando JS</li>
  <li>Trocar os valores entre as variáveis A e B</li> 
  <li>Média de idades</li>
  <li>Efetuar operações matemáticas</li>
  <li>Conversor de medidas</li>
  <li>Var, let, const (diferenças na prática)</li>
  <li>Recursividade com função Fibonacci</li>
</ul>

<p>Aos poucos vou preenchendo este repositório com mais exercícios que considero relevante para desenvolver essa parte crucial da programação. É através do desenvolvimento de uma lógica de programação sólida e àgil que conseguimos absorver de forma eficáz qualquer linguagem de programação.

<h2>Sequência de Fibonacci - Utilizando JS</h2>
<p>A sequência de Fibonacci é uma sequência de números onde o número 1 é o primeiro e segundo termo da ordem, e os demais são originados pela soma de seus antecessores. Fibonacci foi um dos mais importantes matemáticos da idade média, a 'sequência de fiboancci' criada a partir dos estudos sobre reprodução de coelhos, hoje é um dos pilares das operações do mercado financeiro. Suas contribuições surtiram efeito nas mais variadas áreas partindo da biologia até a tecnologia.</p>
<h3>Gerando uma sequência com o loop for</h3>
<p>Com esta solução é necessário definir dois valores iniciais e a partir disso, será iniciado um loop que irá gerar o resto dos valores adicionando dois valores anteriores da sequência. Com uma <code>function</code> é possível pré-determinar o número de valores que queremos gerar para a função que irá gerar a sequência.

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
Código base do desafio citado:<br></br>
<code>const s = [5, 7, 2];</code> <br>
<code>function editInPlace() { </code> <br>
<code>} </code> <br>
<code>editInPlace(); </code> <br>

<h1>Recursividade com função Fibonacci</h1>
<h3>Alguns conceitos</h3>
<li>A sequência de Fibonacci é uma sequência de números onde o número 1 é o primeiro e segundo termo da ordem, e os demais são originados pela soma de seus antecessores. </li>
<li>A função recursiva é uma função que é definida em termos de si mesma. Ou seja, uma função que "chama" a si mesma. Elas podem ser usadas para poder processar uma determinada operação e geralmente há condições internas para que a recursividades sejam aplicadas (uma vez que sem condições, ela chamaria a si mesmo eternamente, causando o que chamamos de loop infinito. Saiba mais nessa excelente discussão encontrada no <a href="https://pt.stackoverflow.com/questions/186269/o-que-%C3%A9-uma-fun%C3%A7%C3%A3o-recursiva">stack overflow</a>.</li>
<li>A estrutura de dados pilha diz que o primeiro elemento inserido é o último a ser removido e o último a ser inserido é o primeiro a ser removido. Saiba mais <a href="https://alissonraphaeloliveira.medium.com/algoritmos-e-estrutura-de-dados-pilhas-be817da5d71">neste artigo</a>.</li>
<h3>Compreendendo o problema</h3>
<p>Desenvolver um algorítimo (n) que vai retornar o número em questão na sequência de fibonaci.</p>
<li>Exemplo: Se o <code>n</code> for <b>4</b> o que precisa ser retornado é o número 3, porque o valor 3 está aqui na posição 4 na sequência Fibonacci</li>
<p>A função recursiva é composta por duas partes:</p>
<ol>
<li>O caso base; O caso base é o caso de parada. Sem ele a função seria um loop infinito. No problema o caso base é se <code>n</code> for menor ou igual a 2.</li> 
<p>Perceba os testes abaixo (lembrando que na Fibonacci é necessário a soma dos dois números anteriores):</p>
f(1) = 1 ↦ Cai na função recursiva<br>
f(2) = 1 ↦ Cai na função recursiva<br>
f(3) = f(2) + f(1) = 2 ↦ Porque o f(2) é 1 e o f(1) também é 1<br>
f(4) = f(3) + f(2) = 2 + 1 = 3 ↦ Porque o f(3) é igual a 2 e o f(2) é igual a 1 <br>
<p>A função recursiva então como uma pilha de chamada (estrutura de dados pilha).</p>
</ol>


