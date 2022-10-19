const vogais = ['a', 'e', 'i', 'o', 'u'];
const code = [1, 2, 3, 4, 5];

function encode(text) {
  const caracters = text.split('');
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[i] = (letra === vogal) ? code[k] : caracters[i];
    });
  });

  return caracters.join('');
}

function decode(text) {
  const caracters = text.split('');
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[i] = (caracter === num.toString()) ? vogais[k] : caracters[i];
    });
  });

  return caracters.join('');
}
// encodeDecode.js
function mapString(objectMap, string) {
    const splitString = string.split('');
    const mappedArray = [];

    for (let index = 0; index < splitString.length; index += 1) {
        const character = splitString[index];
        const mappedValue = objectMap[character];
        
        if (mappedValue) {
        mappedArray.push(mappedValue);
        } else {
        mappedArray.push(character);
        }
    }

    return mappedArray.join('');
}

const functions = { encode, decode };
module.exports = functions;
