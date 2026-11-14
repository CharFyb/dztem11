//1)

// const timeTable = document.getElementById("timeTable");
// const btnStart = document.getElementById("btnStart");

// let time = 60;

// btnStart.addEventListener("click", () => {
//   const int = setInterval(() => {
//     if (time === 30) {
//       alert("Половину часу вичерпано!");
//     } else if (time === 0) {
//       alert("Час вичерпано!");
//       clearInterval(int);
//     }

//     if(time === 0) {
//         clearInterval(int)
//         time = 61
//     }
//     time -= 1;
//     timeTable.textContent = `${time} хв`
//   }, 60000);
// });

//2)

const timeTable = document.getElementById("timeTable");
const btnStart = document.getElementById("btnStart");
const ms = document.getElementById("ms");
let mili = 0;
let time = 30;
btnStart.addEventListener("click", () => {
  btnStart.disabled = true;
  btnStart.textContent = "Start";
  timeTable.style.color = "black";
  ms.style.color = "black";
  const miliTime = setInterval(() => {
    timeTable.textContent = `${time}:`;
    ms.textContent = mili;
    mili -= 1;
    if (mili === -1) {
      mili = 99;
      time -= 1;
      if (time === 10) {
        timeTable.style.color = "red";
        ms.style.color = "red";
      } else if (time === -1) {
        btnStart.textContent = "Restart";
        time = 30;

        btnStart.disabled = false;
        clearInterval(miliTime);
      }
    }
  }, 10);
});
