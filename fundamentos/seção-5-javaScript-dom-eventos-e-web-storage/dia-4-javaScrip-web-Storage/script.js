window.onload = function(){
  let select = document.querySelector('select');
  select.addEventListener('change',function(){
   let selecionado = select.selectedOptions[0];
    document.body.style.backgroundColor = select.value
  })
}