const pageTop = document.querySelector("header");
const pageProjects = document.getElementById("projects");
const pageContact = document.getElementById("contact-form");

const toProjects = document.getElementById("toProjects");
const toContact = document.getElementById("toContact");

//Need to refactor code below, combining two similar functions to one

function moveToProjects(e) {
  e.preventDefault();
  pageProjects.scrollIntoView({ block: "start", behavior: "smooth" });
}

toProjects.addEventListener("click", moveToProjects);

function moveToContact(e) {
  e.preventDefault();
  pageContact.scrollIntoView({ block: "start", behavior: "smooth" });
}

toContact.addEventListener("click", moveToContact);
