const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDNE_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDNE_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintgreeting();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintgreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDNE_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDNE_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintgreeting();
}
