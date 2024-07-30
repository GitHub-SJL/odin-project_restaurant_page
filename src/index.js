import createNav from "./nav";

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



function initializeWebsite() {
    const content = document.getElementById("content");
    
    content.appendChild(createHeader());

}

initializeWebsite();


