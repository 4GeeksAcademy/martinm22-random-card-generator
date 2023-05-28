/* eslint-disable */
import { Button } from "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

let change = () => {
  document.querySelector(".card").innerHTML = generateRandomNumber();
};
document.getElementById("boton").onclick = () => {
  change();
};

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
