import createHeader from "./components/header.js";

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
}

initializeWebsite();
