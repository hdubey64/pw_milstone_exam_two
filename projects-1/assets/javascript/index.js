const createBtn = document.getElementById("create");
const mediaQueryXm = window.matchMedia("(min-width: 350px)");
const mediaQueryLg = window.matchMedia("(max-width: 1199.98px)");

createBtn.addEventListener("mouseover", () => {
   if (mediaQueryLg.matches) {
      return;
   }
   createBtn.innerHTML = "Click me to write";
   createBtn.style.backgroundColor = "transparent";
   createBtn.style.fontWeight = "bolder";
   createBtn.style.width = "200px";
   createBtn.style.color = "#2A9D8F";
});

createBtn.addEventListener("mouseout", () => {
   createBtn.innerHTML = '<i class="bi bi-plus-lg btnLogo"></i>';
   createBtn.style.backgroundColor = "#2a9d8f";
   createBtn.style.width = "100px";
   createBtn.style.fontWeight = "bolder";
   //    createBtn.style.transition = "bolder";
   createBtn.style.color = "white";
});
