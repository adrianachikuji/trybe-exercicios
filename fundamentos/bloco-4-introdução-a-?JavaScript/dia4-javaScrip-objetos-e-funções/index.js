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