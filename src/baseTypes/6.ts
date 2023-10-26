/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// add(1, 2);
// function add2(num1: number, num2: number): void {
//   console.log(num1);
// }
// add2(1, 2);

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

export {};
