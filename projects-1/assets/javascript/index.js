const createBtn = document.getElementById("create");
const mediaQueryXm = window.matchMedia("(min-width: 350px)");
const mediaQueryLg = window.matchMedia("(max-width: 1199.98px)");
const readBtn = document.getElementById("read");
const stars = document.querySelectorAll(".star");
const starRating = document.querySelector(".star-rating");

createBtn.addEventListener("mouseover", () => {
   if (mediaQueryLg.matches) {
      return;
   }
   createBtn.innerHTML = "Click me to write";
   createBtn.style.backgroundColor = "#2a9d8f";
   createBtn.style.fontWeight = "bolder";
   createBtn.style.width = "200px";
   createBtn.style.color = "white";
});

createBtn.addEventListener("mouseout", () => {
   createBtn.innerHTML = '<i class="bi bi-plus-lg btnLogo"></i>';
   createBtn.style.backgroundColor = "#2a9d8f";
   createBtn.style.width = "100px";
   createBtn.style.fontWeight = "bolder";
   //    createBtn.style.transition = "bolder";
   createBtn.style.color = "white";
});

readBtn.addEventListener("mouseover", () => {
   if (mediaQueryLg.matches) {
      return;
   }
   readBtn.innerHTML = "Click me to Read this Article";
   readBtn.style.backgroundColor = "#2A9D8F";
   readBtn.style.fontWeight = "bolder";
   readBtn.style.width = "100%";
   readBtn.style.color = "white";
});

readBtn.addEventListener("mouseout", () => {
   readBtn.innerHTML = "Read";
   readBtn.style.backgroundColor = "#a2ded0";
   readBtn.style.width = "100%";
   readBtn.style.fontWeight = "bolder";
   readBtn.style.color = "#2A9D8F";
});
