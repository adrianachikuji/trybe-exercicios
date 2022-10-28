// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'melão', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['chocolate', 'leite condeisado', 'açai'];

const fruitSalad = (fruit, additional) => { 
   const saladaDeFruta = [ ...specialFruit, ...additionalItens];
   return saladaDeFruta;
};

console.log(fruitSalad(specialFruit, additionalItens));



// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  
  // desestruturando o objeto:
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
  // imprimindo os valores:
  console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);