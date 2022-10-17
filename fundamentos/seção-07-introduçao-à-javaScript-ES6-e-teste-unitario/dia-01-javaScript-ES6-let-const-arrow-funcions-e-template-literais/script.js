//const testingScope = (escopo) => {
  //  if (escopo === true) {
   //  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
   //   ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
  //    console.log(ifScope);
  //  } else {
   //   const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
   //  console.log(elseScope);
   // }
 // }

 // testingScope(false);


 // const oddsAndEvens = [13, 3, 4, 10, 7, 2];

 // const sortOddsAndEvens = () => {
 //   oddsAndEvens[0] = 2
 //   oddsAndEvens[1] = 3
  //  oddsAndEvens[2] = 4
   // oddsAndEvens[3] = 7
   // oddsAndEvens[4] = 10
  //  oddsAndEvens[5] = 13

 //   return  oddsAndEvens
 // }

 // const sortedArray = sortOddsAndEvens()

 // console.log(`Os números ${ sortedArray} se encontram ordenados de forma crescente !`); // será necessário alterar essa linha 😉


const numeros = (number) => {
   let resultado = 1;

   for(let index = 2; index <= number; index += 1) {
    resultado *= index;

    return resultado;
   }
}
const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
  
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
  
    return result;
  }
  
  console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));