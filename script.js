const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const h3 = document.getElementById("h3");
const reset = document.getElementById("reset");

btn.addEventListener("click", function (){
  let hex = "#";

  for (let i = 0; i<6; i++){
    let randomNumber = Math.floor(Math.random() * myArray.length);
    hex += myArray[randomNumber];
  }

  document.body.style.backgroundColor = hex;
  h3.textContent = "Current Color: " + hex;
})

reset.addEventListener("click", function(){
  document.body.style.backgroundColor = "white";
  h3.textContent = "Current Color: #FFFFFF";
})