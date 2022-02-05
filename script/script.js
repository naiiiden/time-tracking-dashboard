fetch("script/data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    let dailyButton = document.getElementById("dailyButton");
    let weeklyButton = document.getElementById("weeklyButton");
    let monthlyButton = document.getElementById("monthlyButton")

    let work = document.getElementById("workTime");
    let workLast = document.getElementById("workTimeLast")

    dailyButton.addEventListener("click", () => {
      dailyButton.classList.add("active");
      weeklyButton.classList.remove("active");
      monthlyButton.classList.remove("active");

      work.textContent = data[0].timeframes.daily.current + "hrs";
      workLast.textContent = `Last week - ${data[0].timeframes.daily.previous}hrs`
    });

    weeklyButton.addEventListener("click", () => {
      weeklyButton.classList.add("active");
      monthlyButton.classList.remove("active");
      dailyButton.classList.remove("active");

      work.textContent = data[0].timeframes.weekly.current + "hrs";
      workLast.textContent = `Last week - ${data[0].timeframes.weekly.previous}hrs`
    });

    monthlyButton.addEventListener("click", () => {
      monthlyButton.classList.add("active");
      weeklyButton.classList.remove("active");
      dailyButton.classList.remove("active");

      work.textContent = data[0].timeframes.monthly.current + "hrs";
      workLast.textContent = `Last week - ${data[0].timeframes.monthly.previous}hrs`
    });
  });