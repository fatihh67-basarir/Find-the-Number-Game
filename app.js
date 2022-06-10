const input = document.querySelector(".input");
const p = document.querySelector(".p");
const btn = document.querySelector(".btn");
const chance = document.querySelector(".chance");
const minmax = document.querySelector(".min-max");
const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
const reBtn = document.querySelector(".re-btn");
// const btnn = document.getElementById('btnn');
let min = 0;
let max = 100;
let hak = 5;



btn.addEventListener("click", () => {
  console.log(rasgeleSayi);
  const tahmin = input.value;
  hak -= 1;
  if (tahmin == rasgeleSayi) {
    minmax.innerHTML = `<p> CONGRATULATİONS </p> <p> The Number is: ${rasgeleSayi} `;
    btn.style.display = "none";
    win.play();
  } else {
    chance.textContent = `Be Careful You have ${hak} chance`;

    if (tahmin < rasgeleSayi) {
      min = tahmin;
      minmax.textContent = `Between ${tahmin} and ${max}`;
      lose.play();
    } else {
      max = tahmin;
      minmax.textContent = `Between ${min} and ${tahmin}`;
      lose.play();
    }
  }

  if (hak === 0 && tahmin != rasgeleSayi) {
    p.innerHTML = `<p> YOU LOSE </p> <p> The Number is: ${rasgeleSayi} `;
    btn.style.display = "none";
    lose.play();
  }
  input.value = "";
});




// input.addEventListener('keydown', (e) => {
//   if (e.keyCode === 13) {
//     btnn.onclick();
//   }
// });



window.addEventListener("load", (event) => {
  reBtn.onclick = function () {
    location.reload(true);
  };
});