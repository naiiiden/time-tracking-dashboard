fetch("script/data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    let dailyButton = document.getElementById("dailyButton");
    let weeklyButton = document.getElementById("weeklyButton");
    let monthlyButton = document.getElementById("monthlyButton")

    dailyButton.addEventListener("click", () => {
      dailyButton.classList.add("active");
      weeklyButton.classList.remove("active");
      monthlyButton.classList.remove("active");
    })

    weeklyButton.addEventListener("click", () => {
      weeklyButton.classList.add("active");
      monthlyButton.classList.remove("active");
      dailyButton.classList.remove("active");
    });

    monthlyButton.addEventListener("click", () => {
      monthlyButton.classList.add("active");
      weeklyButton.classList.remove("active");
      dailyButton.classList.remove("active");
    })
    // document.getElementById("hui").textContent = data[0].timeframes.daily.current;
  });