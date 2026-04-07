function loadRecipe(file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById("modal").style.display = "block";
      document.getElementById("recipe-content").innerText = data;
    });
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}