// =============== Sync =============== //

const btoa = require('btoa');

const cripto = (text) => {
  return btoa(text);
}

// console.log('foi');
// console.log(cripto('esta mensagem é secreta'));
// console.log('voltou');

// =============== Async =============== //

const servidorRusso = (text) => {
  setTimeout(() => {
    // return btoa(text); Erro
    console.log(btoa(text));
  }, 600);
}

// console.log('foi');
// console.log(servidorRusso('outra mensagem secreta'));
// console.log('voltou');

// --------------- Callback --------------- //

const servidorRussoCallback = (text, callback) => {
  setTimeout(() => {
    const err = text ? null : 'Texto inválido';
    callback(err, btoa(text));
  }, 600);
}

// console.log('foi');
// servidorRussoCallback('mais uma mensagem secreta', (err, result) => {
// if (err) {
//   console.log(err);
//   return;
// }
//   console.log(`result: ${result}`);
// });
// console.log('voltou');

// ----------------------------- //

// console.log('foi');
// servidorRussoCallback('mais uma mensagem secreta', (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(`result: ${result}`);
//   console.log('voltou');
// });

// ----------------------------- //

// console.log('foi');
// servidorRussoCallback('mais uma mensagem secreta', (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   servidorRussoCallback(result, (err2, result2) => {
//     if (err2) {
//       console.log(err2);
//       return;
//     }
//     console.log(`result: ${result2}`);
//     console.log('voltou');
//   });
// });

// --------------- Promisses --------------- //

const servidorRussoPromise = text => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!text) resolve('Texto Inválido');
    resolve(btoa(text));
  }, 600);
});

// console.log('foi');
// servidorRussoPromise('mesma mensagem secreta').then((result) => {
//   console.log(result);
//   console.log('voltou');
// }).catch((err) => {
//   console.log(err);
// });

// -------------------- //

// console.log('foi');
// servidorRussoPromise('mesma mensagem secreta').then((result) => {
//   servidorRussoPromise(result).then((result2) => {
//     servidorRussoPromise(result2).then((result3) => {
//       console.log(result3);
//       console.log('voltou');
//     }).catch((err) => {
//       console.log(err);
//     });
//   }).catch((err) => {
//     console.log(err);
//   });
// }).catch((err) => {
//   console.log(err);
// });

// --------------- async await --------------- //

// (async () => {
//   try {
//     console.log('foi');
//     const result = await servidorRussoPromise('mesma mensagem secreta');
//     const result2 = await servidorRussoPromise(result);
//     const result3 = await servidorRussoPromise(result2);
//     console.log(result3);
//     console.log('voltou');
//   } catch (err) {
//     console.log(err);
//   }
// })();
