const btnVal = document.querySelector(".btn");

const diffColor = ["red", "black", "pink", "yellow", "green"];
const colorLength = diffColor.length;
console.log(colorLength);

btnVal.addEventListener("click", function () {
  //alert("here i am");
  document.body.style.backgroundColor = diffColor[randomLength(colorLength)];
  console.log(
    (document.body.style.backgroundColor = diffColor[randomLength(colorLength)])
  );
});

function randomLength(colorLength) {
  return Math.floor(Math.random() * colorLength);
}
