# debugging_and_error_handling_js
Projecto create for program Philips Full Stack developer from Digital innovatio One

# Tratamento de Erros

Projeto referente ao curso "Tratamento de Erros" [Digital Innovation One](https://digitalinnovation.one/)ministrado por [Stephany Nush](https://github.com/stebsnusch).

# Error Handling

Project referring to the course "Error Handling" [Digital Innovation One](https://digitalinnovation.one/) taught by [Stephany Nush](https://github.com/stebsnusch).

## Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações
  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Utilize a declaração `try...catch`
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`

## Activity: validation of errors by type

The goal is for the function to receive an array and return it if its size matches the number sent as a parameter in the function. Otherwise, an error will be thrown.

- Create a function that takes an array and a number
- Perform the following validations
  - If parameters are not sent, throw an error of type `ReferenceError`
  - If the array is not of type 'object', throw an error of type `TypeError`
  - If the number is not of type 'number', throw an error of type `TypeError`
  - If the size of the array is different from the number sent as a parameter, throw an error like `RangeError`
- Use the `try...catch` statement
- Filter catch calls by each type of error using the `instanceof` operator

## Links Auxiliares

- [Objeto Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)

## Auxiliary Links

- [Error Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)