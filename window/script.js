import data from './data.js'


const image = document.getElementById("image-container");
const character = document.getElementById("character-name");
const title = document.getElementById("title");
const bounty = document.getElementById("bounty");
const text = document.getElementById("description");

const btnPrevious = document.querySelector(".btn.previous");
const btnNext = document.querySelector(".btn.next");

let current = 0;

function showItem() {
    const item = data[current];
    image.src = item.img;
    character.textContent = item.name;
    title.textContent = item.title;
    bounty.textContent = item.bounty;
    text.textContent = item.description;
}

document.addEventListener('DOMContentLoaded', () => {
    showItem();
});

btnPrevious.addEventListener('click', () => {
    current--;
    if (current < 0) {
        current = data.length - 1;
    }
    showItem();
});

btnNext.addEventListener('click', () => {
    current++;
    if (current > data.length-1) {
        current = 0;
    }
    showItem();
});
