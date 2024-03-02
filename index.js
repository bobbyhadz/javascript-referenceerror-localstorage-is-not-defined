// ReferenceError: localStorage is not defined in JavaScript

//  Checking if you're on the browser or on the server

if (typeof window !== 'undefined') {
  console.log('You are on the browser');
  // 👉️ can use localStorage here

  localStorage.setItem('name', 'Tom');

  console.log(localStorage.getItem('name')); // 👉️ "Tom"
} else {
  console.log('You are on the server');
  // 👉️ can't use localStorage
}
