const createBtn = document.getElementById("create");
const mediaQueryXm = window.matchMedia("(min-width: 350px)");
const mediaQueryLg = window.matchMedia("(max-width: 1199.98px)");

createBtn.addEventListener("mouseover", () => {
   if (mediaQueryLg.matches) {
      return;
   }
   createBtn.innerHTML = "Go to Home page ";
   createBtn.style.backgroundColor = "#2a9d8f";
   createBtn.style.fontWeight = "bolder";
   createBtn.style.width = "200px";
   createBtn.style.color = "white";
   createBtn.style.fontSize = "1rem";
});

createBtn.addEventListener("mouseout", () => {
   createBtn.innerHTML = '<i class="bi bi-arrow-left"></i>';
   createBtn.style.backgroundColor = "#2a9d8f";
   createBtn.style.width = "100px";
   createBtn.style.fontWeight = "bolder";
   createBtn.style.fontSize = "2.5rem";
   createBtn.style.color = "white";
});

createBtn.addEventListener("click", function () {
   // Change the location to Page 1
   window.location.href = "index.html";
});
