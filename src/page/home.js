function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  chefImage.src = "images/chef.jpg";
  chefImage.alt = "Chef";

  home.appendChild(
    createParagraph(
      "가장 풍요롭고 생생한 시간, 오늘을 주제로 한 전통 한식 다이닝"
    )
  );
  home.appendChild(chefImage);
  home.appendChild(createParagraph("서병호 셰프"));
  home.appendChild(createParagraph("前 워커힐 조리팀 SK CLUB 소속"));
  home.appendChild(createParagraph("前 그랜드 워커힐 '온달(Ondal)' 주방장"));

  home.appendChild(createParagraph("前 가정식 한식 라온 오너 셰프"));

  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
