let isStarted = false;

const sendToken = () => {
  if (isStarted == false) {
    isStarted = true;
    document.getElementById("finish").disabled = false;

    let number = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("tokenNumber").innerText = number;

    let time = 180;
    let timer;

    timer = setInterval(function () {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("timer").innerText = min + ":" + sec;
        time -= 1;
      } else {
        document.getElementById("finished").disabled = true;
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000);
  }
};
