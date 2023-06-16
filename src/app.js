/* eslint-disable */
import { Button } from "bootstrap";
import "./style.css";

let card = document.querySelector(".card");

window.onload = () => {
  card.classList.add(generateRandomSuit());
  card.innerHTML = generateRandomNumber();
};

let change = () => {
  card.classList.remove("diamond", "heart", "club", "spade");
  card.classList.add(generateRandomSuit());
  card.innerHTML = generateRandomNumber();
};
document.getElementById("boton").onclick = () => {
  change();
};

setInterval(() => {
  change();
}, 10000);

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "heart", "club", "spade"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
