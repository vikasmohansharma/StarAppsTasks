function changeColor(color) {
  const umbrellaImage = document.getElementById("umbrellaImage");
  const loader = document.getElementById("loader");
  const uploadButton = document.getElementById("uploadButton");
  const logoImage = document.getElementById("logoImage");

  loader.classList.remove("hidden");
  umbrellaImage.classList.add("hidden");
  loader.setAttribute("stroke", color);
  logoImage.style.visibility = "hidden";

  setTimeout(() => {
    umbrellaImage.src = `assets/${color} umbrella.png`;
    umbrellaImage.onload = () => {
      loader.classList.add("hidden");
      umbrellaImage.classList.remove("hidden");
      uploadButton.style.backgroundColor = color;
      logoImage.style.visibility = "visible ";
    };
  }, 500); // Simulate loading time
}

function uploadLogo(event) {
  const fileInput = event.target;
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const fileName = fileInput.files[0].name;
    //document.getElementById("buttonText").style.display = "visible";
    document.getElementById("buttonText").innerHTML = fileName;
    document.getElementById("uploadButton").classList.add("active");
    const reader = new FileReader();
    reader.onload = function (e) {
      const logoImage = document.getElementById("logoImage");
      logoImage.src = e.target.result;
      logoImage.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
}

function cancelUpload(event) {
  event.preventDefault(); // Prevent the default behavior
  event.stopPropagation(); // Prevent triggering the file input click
  const fileInput = document.getElementById("logoUpload");
  fileInput.value = ""; // Clear the file input
  document.getElementById("buttonText").style.display = "inline";
  document.getElementById("fileName").textContent = "";
  document.getElementById("uploadButton").classList.remove("active");

  const logoImage = document.getElementById("logoImage");
  logoImage.src = "";
  logoImage.style.display = "none";
}
