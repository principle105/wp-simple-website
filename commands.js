var cmdContainer = document.getElementById("commands")

window.onload = function() {
  handleClick(
    document.getElementById("All")
  )
};
const getCmdBox = (category, command) => {
  return `
    <div class="cmd-box">
      <h1 class="cmd-name">${command}</h1>
      <p class="cmd-description">${data[category][command].description}</p>
    </div>
  `
} 

const handleClick = (obj) => {
  cmdContainer.innerHTML = "";

  if (obj.id === "All") {
    for (const category in data) {
      for (const command in data[category]) {
        cmdContainer.innerHTML += getCmdBox(category, command)
      }
    }
  } else if (obj.id in data) {
      for (const command in data[obj.id]) {
        cmdContainer.innerHTML += getCmdBox(obj.id, command)
    }
  } else {
    return
  }
  document.querySelectorAll(".active")
    .forEach(e => e.classList.remove("active"));
  obj.classList.add("active");

}
