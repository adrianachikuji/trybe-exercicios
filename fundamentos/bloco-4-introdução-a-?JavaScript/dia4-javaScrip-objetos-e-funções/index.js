let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
const mensagem = 'Bem vinda, '
//console.log('Bem vinda, ' + info.personagem);
//console.log(`Bem vinda, ${info.personagem}`);
//console.log(mensagem + info.personagem);

//----------------------------------------------------------

info['recorrente'] = 'Sim';
//console.log(info);
for (let chave in info){
    console.log(chave);
}

for (let chave in info){
    console.log(info[chave]);
}
//--------------------------------------------------------------------------------
console.log('\n\n--------------')
let info2= {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  console.log(info.personagem + ' e ' + info2.personagem);
  console.log(info.origem+ ' e ' + info2.origem);
  console.log(info.nota + ' e ' + info2.nota);
  if (info.recorrente === info2.recorrente && info.recorrente === 'Sim'){
    console.log('Ambos recorrentes')
  } else{
    console.log('Ambos não recorrentes')
  }
  //______________________________________________________________________________________
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
 
 









  




  