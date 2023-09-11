const day = document.querySelector(".currentTime");
const UTCTime = document.querySelector(".UTCTime");

//To extract current day from the DATE object
const date = new Date();
const currentTime = date.getDay();

//To display current day accordingly
if (currentTime == 0) {
  day.innerHTML = "Sunday";
} else if (currentTime == 1) {
  day.innerHTML = "Monday";
} else if (currentTime == 2) {
  day.innerHTML = "Tuesday";
} else if (currentTime === 3) {
  day.innerHTML = "Wednesday";
} else if (currentTime == 4) {
  day.innerHTML = "Thursday";
} else if (currentTime == 5) {
  day.innerHTML = "Friday";
} else {
  day.innerHTML = "Saturday";
}

function timer() {
  const date = new Date();
  let z = date.getTime();
  UTCTime.innerHTML = z;
}
setTimeout(timer(), 1000);
