// variables

let navAbout = document.getElementById("navAbout");
let navProjects = document.getElementById("navProjects");
let navContact = document.getElementById("navContact");

let contentAbout = document.getElementById("contentAbout");
let contentProjects = document.getElementById("contentProjects");
let contentContact = document.getElementById("contentContact");

// functions

navAbout.addEventListener("click", () => {
    contentAbout.scrollIntoView({ behavior: "smooth", block: "start" });
});

navProjects.addEventListener("click", () => {
    contentProjects.scrollIntoView({ behavior: "smooth", block: "start" });
});

navContact.addEventListener("click", () => {
    contentContact.scrollIntoView({ behavior: "smooth", block: "start" });
});
