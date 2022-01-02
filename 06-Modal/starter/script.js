'use strict';
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModale = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
  
for(let i = 0; i < btnShowModal.length; i++){
  btnShowModal[i].addEventListener('click', function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
}

btnCloseModal.addEventListener('click', closeModale);

overlay.addEventListener('click', closeModale);

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    if(!modal.classList.contains('hidden')){
      closeModale();
    }
  }
})
