const createBtn = document.getElementById("create");
const mediaQueryXm = window.matchMedia("(min-width: 350px)");
const mediaQueryLg = window.matchMedia("(max-width: 1199.98px)");

createBtn.addEventListener("mouseover", () => {
   if (mediaQueryLg.matches) {
      return;
   }
   createBtn.innerHTML = "Go to Home page ";
   createBtn.style.backgroundColor = "#ffffff";
   createBtn.style.width = "200px";
   createBtn.style.color = "#6200ee";
   createBtn.style.fontSize = "1.3rem";
});

createBtn.addEventListener("mouseout", () => {
   createBtn.innerHTML = '<i class="bi bi-arrow-left"></i>';
   createBtn.style.backgroundColor = "#6200ee";
   createBtn.style.width = "100px";
   createBtn.style.fontSize = "2rem";
   createBtn.style.color = "white";
});

createBtn.addEventListener("click", function () {
   // Change the location to Homepage
   window.location.href = "index.html";
});

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

let data = JSON.parse(localStorage.getItem("formDataArray")) || [];

console.log(data);

const readBlog = (id) => {
   // Find the selected blog post by its ID
   const selectedBlog = data.find((blog) => blog.id == id);

   console.log("selectedBlog", selectedBlog);

   const title = document.getElementById("title");
   const description = document.getElementById("description");
   const blogImg = document.getElementById("img");
   const article = document.getElementById("article");

   // Check if the selected blog post exists
   if (selectedBlog) {
      // Create a URL for the individual blog details page
      title.innerText = selectedBlog.title;
      description.innerText = selectedBlog.discription;
      blogImg.src = selectedBlog.url;

      article.innerText = selectedBlog.textarea;
      console.log(selectedBlog);
   } else {
      console.log("Blog post not found.");
   }
};

readBlog(id);
