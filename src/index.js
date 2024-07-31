import createHeader from "./components/header.js";
import createMain from "./components/main.js";
import createFooter from "./components/footer.js";

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

initializeWebsite();
