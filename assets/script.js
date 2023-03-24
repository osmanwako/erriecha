const popupcontent = document.querySelector('body');
const humbergid = document.querySelector('#humbergurid');
const closebtnid = document.querySelector('#popup-closeid');

function openmenu() {
  popupcontent.classList.toggle('popup-menu');
}

function closemenu() {
  popupcontent.classList.toggle('popup-menu');
}

humbergid.addEventListener('click', openmenu);
closebtnid.addEventListener('click', closemenu);
