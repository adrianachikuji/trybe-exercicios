const numberChecker = (myNumber, number) => myNumber === number;
const resultadoLoteria = () => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callbackify(myNumber, number) ? 'Dia de sorte, você ganhou!' : 'Tente novamente!';
};
console.log(resultadoLoteria(2, numberChecker));
