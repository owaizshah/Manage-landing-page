const btn = document.querySelector(".btn");
const mainnav = document.querySelector(".main-nav");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  mainnav.classList.toggle("hidden");
  mainnav.classList.toggle("flex");
});
