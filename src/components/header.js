import createNav from "./nav.js";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("img");
    restaurantName.src = "images/logo.png";
    restaurantName.alt = "restaurant name";

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

export default createHeader;