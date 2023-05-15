const whereAreYou = document.getElementById(`where-are-you`);

const parent = whereAreYou.parentElement;
parent.style.color = `red`;

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = `adicionando texto`;

const firstChild = parent.firstElementChild;

const firstChild2 = whereAreYou.parentElement;

const attention = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const thirdChild2 = parent.lastElementChild.previousElementSibling;

