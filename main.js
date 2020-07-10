const pageTop = document.querySelector("header");
const pageProjects = document.getElementById("projects");

const toProjects = document.getElementById("toProjects");

function moveToProjects(e) {
  e.preventDefault();
  pageProjects.scrollIntoView({ block: "start", behavior: "smooth" });
}

toProjects.addEventListener("click", moveToProjects);
