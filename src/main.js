import * as calculator from './calculator.js';
import soma from './sum.js';

console.log(calculator.sum(16, 12));
console.log(calculator.subtraction(13, 2));

console.log(soma(16, 12));


const myPromise = new Promise((resolve, reject) => {
  return setTimeout(() => {
    resolve('OK deu erro ... ');
  }, 1000);
});

const exec = async () => {
  try {
    loading = true
    await myPromise;
    console.log('teste 1...');

    await myPromise;
    console.log('teste 2...');
  } catch (error) {
    console.warn(error);
  } finally {
    loading = false
    console.log('finally');
  }

}

exec();

// myPromise.then(() => {
//   console.log('deu certo');
// }).catch((error) => {
//   console.warn(error);
// });

