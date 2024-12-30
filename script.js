'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');

//creating and inserting elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'Lorem <button class = "btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
// // header.append(message);
// //prepend makes it the first child, append will make it the last.
// //will be added only once.

// header.append(message.cloneNode(true));
// //message will appear twice now

// header.before(message);
// //message comes before header. .after will make it appear after the header.
// //message.remove() will remove element.

// document.documentElement.style.setProperty('--color-primary', 'orangered');
// //will transform primary color to orangered everywhere on the page.
