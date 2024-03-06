// Function to change background color
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

// Event listener for button click to change background color
document
  .getElementById("changeColorBtn")
  .addEventListener("click", changeBackgroundColor);

// Form validation
document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
    }
  });

// Image hover effect
var image = document.getElementById("image");
image.addEventListener("mouseover", function () {
  image.src = "new_image.jpg";
});
image.addEventListener("mouseout", function () {
  image.src = "female-avatar.jpg";
});
