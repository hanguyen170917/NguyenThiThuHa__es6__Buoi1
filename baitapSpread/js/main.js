let jumpText = () => {
  let text = document.querySelector(".heading").innerHTML;
  let textSplit = text.split(" ");

  let textJoin = textSplit.join("");
  let textArr = [...textJoin];
  let content = "";
  for (let i = 0; i < textArr.length; i++) {
    content += `
        <span>${textArr[i]}</span>
    `;
  }
  document.querySelector(".heading").innerHTML = content;
};

jumpText();
