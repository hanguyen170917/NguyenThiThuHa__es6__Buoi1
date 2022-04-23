const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celedon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const renderButton = () => {
  let content = "";
  for (let i = 0; i < colorList.length; i++) {
    content += `
      <button class="color-button ${colorList[i]}" onclick="changColorHouse('${colorList[i]}')"></button>
    `;
  }
  document.getElementById("colorContainer").innerHTML = content;
};
renderButton();

const activeBtn = document.querySelectorAll(".color-button");
activeBtn.forEach((tab) => {
  tab.addEventListener("click", function () {
    activeBtn.forEach((tab) => tab.classList.remove("active"));
    this.classList.add("active");
  });
});

const changColorHouse = (color) => {
  for (let i = 0; i < colorList.length; i++) {
    document.getElementById("house").classList.remove(colorList[i]);
    if (color === colorList[i]) {
      document.getElementById("house").classList.add(colorList[i]);
    }
  }
};
