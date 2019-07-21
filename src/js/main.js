"use strict";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const noteMessage = document.querySelector('.note__message--js');
const loadButton = document.querySelector('.note__button--js-load');
const saveButton = document.querySelector('.note__button--js-save');

const saveContent = (e) => {
  e.preventDefault();
  const message = noteMessage.value;
  localStorage.setItem('noteMessage', message);
}

const loadContent = (e) => {
  e.preventDefault();
  localStorage.getItem('noteMessage')
    ? noteMessage.value = localStorage.getItem('noteMessage')
    : null;
}

loadButton.addEventListener('click', loadContent);
saveButton.addEventListener('click', saveContent);