document.getElementById("btnKhoi1").addEventListener("click", function () {
  let mathScore = document.getElementById("inpToan").value;
  let physicalScore = document.getElementById("inpLy").value;
  let chemicalScore = document.getElementById("inpHoa").value;

  const result = averageScore(mathScore, physicalScore, chemicalScore);

  document.getElementById("tbKhoi1").innerHTML = result;
});

document.getElementById("btnKhoi2").addEventListener("click", function () {
  let literatureScore = document.getElementById("inpVan").value;
  let historyScore = document.getElementById("inpSu").value;
  let geographyScore = document.getElementById("inpDia").value;
  let englishScore = document.getElementById("inpEnglish").value;

  const result = averageScore(
    literatureScore,
    historyScore,
    geographyScore,
    englishScore
  );

  document.getElementById("tbKhoi2").innerHTML = result;
});

const averageScore = (...numbers) => {
  //   console.log(numbers);
  let total = 0;
  let avgScore = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += parseFloat(numbers[i]);
    avgScore = total / numbers.length;
  }
  const result = Math.round(avgScore * 100) / 100;
  return result;
};
