function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      ["비빔밥", "Bibimbap"],

      "신선한 채소, 고기, 계란 등 다양한 재료를 적당한 비율로 섞어 즐기는 전통 한국 요리"
    )
  );
  menu.appendChild(
    createMenuItem(
      ["떡볶이", "Stir-fried Rice Cake"],
      "매운 고추장 소스에 쫄깃한 떡이 어우러져 특유의 매콤달콤한 맛이 일품"
    )
  );
  menu.appendChild(
    createMenuItem(
      ["김치볶음밥", "Kimchi Fried Rice"],
      "신선한 김치와 밥, 그리고 다양한 재료들을 함께 볶아내어 만든 김치볶음밥"
    )
  );
  menu.appendChild(
    createMenuItem(
      ["갈비구이", "Grilled Marinated Galbi"],
      "한우 갈비를 달콤하고 고소한 간장 양념에 재워 구운 전통적인 한국 요리"
    )
  );
  menu.appendChild(
    createMenuItem(
      ["김치전", "Kimchi Pancake"],
      "김치, 밀가루, 다양한 양념으로 만들어 팬에 구운 한국 전요리"
    )
  );
  menu.appendChild(
    createMenuItem(
      ["해물파전", "Seafood and Green Onion Pancake"],
      "신선한 해산물과 파를 넣은 반죽을 팬에 구운 고소한 전요리"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name[0];

  const englishFoodName = document.createElement("p");
  englishFoodName.textContent = name[1];

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/menu/${name[0]}.png`;
  foodImage.alt = `${name[0]}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
