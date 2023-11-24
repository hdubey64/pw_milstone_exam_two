const createBtn = document.getElementById("create");
const mediaQueryXm = window.matchMedia("(min-width: 350px)");
const mediaQueryLg = window.matchMedia("(max-width: 1199.98px)");
const readBtn = document.getElementById("read");
const addBlog = document.querySelector(".modelBtn");

createBtn.addEventListener("mouseover", () => {
   if (mediaQueryLg.matches) {
      return;
   }
   createBtn.innerHTML = "Click me to write";
   createBtn.style.backgroundColor = "white";
   createBtn.style.width = "200px";
   createBtn.style.color = "#6200ee";
});

createBtn.addEventListener("mouseout", () => {
   createBtn.innerHTML = '<i class="bi bi-plus-lg btnLogo"></i>';
   createBtn.style.backgroundColor = "#6200ee";
   createBtn.style.width = "100px";
   createBtn.style.color = "white";
});

// Add a click event listener to the "submit" button
const createBlog = () => {
   const url = document.getElementById("blogPoster").value;
   const title = document.getElementById("title").value;
   const discription = document.getElementById("description").value;
   const textarea = document.getElementById("textarea").value;
   console.log("Clicked");

   // Create an object with the form data
   const formData = {
      id: new Date().getTime(),
      url: url,
      title: title,
      discription: discription,
      textarea: textarea,
   };

   // Check if any form field is empty
   if (!url || !title || !discription || !textarea) {
      return alert("All fields are required");
   }

   // Get existing data from local storage or create an empty array
   const existingData = JSON.parse(localStorage.getItem("formDataArray")) || [];

   console.log(existingData);

   // Add the new form data to the existing array
   existingData.push(formData);

   // Store the updated array back in local storage
   localStorage.setItem("formDataArray", JSON.stringify(existingData));

   // Clear the form fields after submission
   document.getElementById("blogPoster").value = "";
   document.getElementById("title").value = "";
   document.getElementById("description").value = "";
   document.getElementById("textarea").value = "";

   // Show an alert that the form data is saved
   alert("Form data saved to local storage");
};

// Get data from local storage or initialize an empty array
let data = JSON.parse(localStorage.getItem("formDataArray")) || [];

// Select the main container
// const mainContainer = document.querySelector("#main");

// Function to open a page with individual blog post details
const openBlogDetails = (id) => {
   // Find the selected blog post by its ID
   const selectedBlog = data.find((blog) => blog.id === id);

   // Check if the selected blog post exists
   if (selectedBlog) {
      // Create a URL for the individual blog details page
      const detailsPageURL = `blog.html?id=${selectedBlog.id}`;

      // Open the new page in a new browser tab
      // window.open(detailsPageURL, "_blank");
      window.location.href = detailsPageURL;
   } else {
      console.log("Blog post not found.");
   }
};

const displayPost = (data) => {
   // Check if mainContainer exists
   const mainContainer = document.getElementById("main");
   if (!mainContainer) {
      console.error("Main container not found.");
      return;
   }

   // Loop through each blog post in the data array
   for (let i = 0; i < data.length; i++) {
      const element = data[i];

      try {
         // Create a new "div" element for the blog post card
         const blogPage = document.createElement("div");
         // blogPage.className = "main"; // Apply the "main" class to the div
         blogPage.innerHTML = `
            <div class="card">
               <div class="content">
                  <img src="${element.url}" alt="" />
                  <div class  = "cardData">
                     <h1 class="card-title">${element.title}</h1>
                     <p class="card-para">${element.discription}</p>
                  </div>
               </div>
               <button onClick="openBlogDetails(${element.id})" class="read">Read More... </button>
            </div>
         `;

         // Insert the blog post card into the main container
         mainContainer.insertAdjacentElement("beforeend", blogPage);
      } catch (error) {
         console.log(error);
      }
   }

   // mainContainer.innerText = newCards;
};

// Call the function to display the blog post data on the page
displayPost(data);
