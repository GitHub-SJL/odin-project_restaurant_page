import loadHome from "../page/home";
import loadMenu from "../page/menu";
import loadContact from "../page/contact";

function createNav() {
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("btn-nav");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeBtn);
    loadHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("btn-nav");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuBtn);
    loadMenu();
  });

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("btn-nav");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactBtn);
    loadContact();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".btn-nav");

  buttons.forEach((btn) => {
    if (btn.textContent !== button.textContent) {
      btn.classList.remove("active");
    }
  });

  button.classList.add("active");
}

export default createNav;
