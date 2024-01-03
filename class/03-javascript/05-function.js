let generateRandomNumber = () => {
  let randomNumber = String(Math.floor(Math.random() * 1000000)).padStart(
    6,
    "0"
  );
  document.getElementById("tokenNumber").innerText = randomNumber;
  document.getElementById("tokenNumber").style.color = "#" + randomNumber;
};
