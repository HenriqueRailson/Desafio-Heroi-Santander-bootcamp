⚔️ Classificador de Nível de Herói
Este projeto JavaScript simples classifica o nível (patente) de um herói com base na sua quantidade de Experiência (XP), utilizando estruturas de decisão (if-else if).

🎯 Objetivo
Criar um programa que armazene o nome e o XP de um herói e, utilizando estruturas de decisão, exiba uma mensagem indicando o nível (patente) em que ele se encontra, seguindo a tabela de classificação abaixo.

📜 Tabela de Classificação
Faixa de XP Nível (Patente)
XP < 1.000 Ferro
XP 1.001 - 2.000 Bronze
XP 2.001 - 5.000 Prata 
XP 5.001 - 7.000 Ouro 
XP 7.001 - 8.000 Platina 
XP 8.001 - 9.000 Ascendente 
XP 9.001 - 10.000 Imortal 
XP 10.001 Radiante

🛠️ Como o Projeto Foi Construído
O desenvolvimento do projeto seguiu os seguintes passos:

1. Preparação e Entrada de Dados (Input)
Como o JavaScript padrão executado via Node.js não possui uma função input nativa, foi necessário importar uma biblioteca externa para permitir a interação com o usuário via terminal:
Instalação da Biblioteca: A biblioteca prompt-sync foi instalada para simular a função input.
npm install prompt-sync

Importação: No início do código, a biblioteca foi importada.
const prompt = require('prompt-sync')();

Coleta de Dados: O nome do herói (let nome) foi coletado, e a Experiência (let xp) foi coletada e convertida para um número inteiro usando parseInt(), garantindo que as comparações matemáticas fossem precisas.

let xp = parseInt(prompt("Quantas XP você conseguiu em sua aventura? "), 10);

2.Estrutura de Decisão e Lógica
A variável let patente foi criada para armazenar o resultado da classificação. A lógica central foi construída usando uma série de instruções if e else if.
Condições Duplas (&&): Para garantir que o XP se encaixasse precisamente nas faixas solicitadas (ex: entre 1.001 e 2.000), o operador lógico "E" (&&) foi usado para verificar os limites inferior e superior simultaneamente.

} else if (xp >= 1001 && xp <= 2000) {
    patente = "Bronze";
}

Limites: As condições foram ajustadas para cobrir todas as transições (ex: xp < 1001 para Ferro e xp >= 1001 para Bronze), eliminando "buracos" na lógica onde um valor de XP poderia não ser classificado.

Caso Final (else): O bloco else final capturou todos os valores maiores ou iguais a 10.001, classificando-os automaticamente como Radiante.

3. Saída (Output)
Ao final da estrutura de decisão, o programa exibe a mensagem de saída final.

⚙️ Como Executar
1.Certifique-se de ter o Node.js instalado.

2.Instale a dependência: npm install prompt-sync

3.Salve o código como index.js (ou o nome que preferir).

4.Execute no terminal: node index.js
