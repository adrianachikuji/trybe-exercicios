const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  function containsA() {
    let totalLetrasA = 0;
    names.forEach((name) => {
    const letrasNomes = name.split('');
     totalLetrasA += letrasNomes.reduce ((letrasA, letraAtual) =>{
     if (letraAtual === 'a' || letrasA === 'A'){
     return  letrasA + 1;
     }
     return letrasA;
    }, 0);
  });
  return totalLetrasA;
}
console.log(containsA);