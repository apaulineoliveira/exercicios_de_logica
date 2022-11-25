# exercicios_de_logica
Compilado de exercícios de lógica de programação utilizando Javascript.
# 🪶 Objetivo
<p>O objetivo deste repositório é reunir um conjunto de exercícios de lógica de programação utilizando Javascript para aprimorar as habilidades em resolução de problemas do cotidiano profissional de forma rápida e assertiva.</p> Dentre as subpastas é possível encontrar os sequintes exercícios:<br></br>

<ul>
  <li>Gerar uma sequência de Fibonacci utilizando JS</li>
  <li>Trocar os valores entre as variáveis A e B</li> 
  <li>Trocar os valores entre as variáveis A e B</li>
  <li>Média de idades</li><br>
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
<ul>
  <li>Utilizei neste projeto a função <code>parseInt</code> para transformar os valores de string em number e a partir disso produzir um valor em número inteiro.</li>
</ul>
