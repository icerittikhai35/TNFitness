function day() {
  var day = new Date();
  var week = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );

  for (i = 0; i < 14; i++) {
    console.log(week[(day.getDay() + 1 + i) % 7]);
  }
}

day();