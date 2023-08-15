const createBtn = document.getElementById("create");

createBtn.addEventListener("mouseover", () => {
   createBtn.innerHTML = "Click me to write";
   createBtn.style.backgroundColor = "transparent";
   createBtn.style.fontWeight = "bolder";
   createBtn.style.width = "200px";
});

createBtn.addEventListener("mouseout", () => {
   setTimeout(() => {
      createBtn.innerHTML = '<i class="bi bi-plus-lg btnLogo">';
      createBtn.style.backgroundColor = "#e2c0ff";
      createBtn.style.width = "100px";
      createBtn.style.fontWeight = "bolder";
   }, 100);
});
