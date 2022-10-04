window.onload = function(){
  let select = document.querySelector('select');
  select.addEventListener('change',function(){
   let selecionado = select.selectedOptions[0];
    document.body.style.backgroundColor = select.value

    localStorage.setItem('4-background-color', select.value);;
  })
  let inputfontSize = document.querySelector('input[name="fonte-size');
  inputfontSize.addEventListener('change', function(){
    let p = document.querySelector('p');
   p.style.fontSize = `${inputfontSize.value}px`;

   localStorage.setItem('4-font-size',`${inputfontSize.value}px`);
  })
  
  let salvabackground = localStorage.getItem('4-background-color');
  document.body.style.backgroundColor = salvabackground;

  let savefontSize = localStorage.getItem('4-font-size')
  let p = document.querySelector('p');
  p.style.fontSize = savefontSize;

 
}

