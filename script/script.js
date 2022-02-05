fetch("script/data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    let dailyButton = document.getElementById("dailyButton");
    let weeklyButton = document.getElementById("weeklyButton");
    let monthlyButton = document.getElementById("monthlyButton")

    let work = document.getElementById("workTime");
    let workLast = document.getElementById("workTimeLast");

    let play = document.getElementById("playTime");
    let playLast = document.getElementById("playTimeLast");

    let study = document.getElementById("studyTime");
    let studyLast = document.getElementById("studyTimeLast");

    let exercise = document.getElementById("exerciseTime");
    let exerciseLast = document.getElementById("exerciseTimeLast");

    let social = document.getElementById("socialTime");
    let socialLast = document.getElementById("socialTimeLast");

    let selfcare = document.getElementById("selfcareTime");
    let selfcareLast = document.getElementById("selfcareTimeLast");

    dailyButton.addEventListener("click", () => {
      dailyButton.classList.add("active");
      weeklyButton.classList.remove("active");
      monthlyButton.classList.remove("active");

      work.textContent = data[0].timeframes.daily.current + "hrs";
      workLast.textContent = `Last Week - ${data[0].timeframes.daily.previous}hrs`;
      
      play.textContent = data[1].timeframes.daily.current + "hrs";
      playLast.textContent = `Last Week - ${data[1].timeframes.daily.previous}hrs`;
    
      study.textContent = data[2].timeframes.daily.current + "hrs";
      studyLast.textContent = `Last Week - ${data[2].timeframes.daily.previous}hrs`;

      exercise.textContent = data[3].timeframes.daily.current + "hrs";
      exerciseLast.textContent = `Last Week - ${data[3].timeframes.daily.previous}hrs`;
    
      social.textContent = data[4].timeframes.daily.current + "hrs";
      socialLast.textContent = `Last Week - ${data[4].timeframes.daily.previous}hrs`;

      selfcare.textContent = data[5].timeframes.daily.current + "hrs";
      selfcareLast.textContent = `Last Week - ${data[5].timeframes.daily.previous}hrs`;
    });

    weeklyButton.addEventListener("click", () => {
      weeklyButton.classList.add("active");
      monthlyButton.classList.remove("active");
      dailyButton.classList.remove("active");

      work.textContent = data[0].timeframes.weekly.current + "hrs";
      workLast.textContent = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
    
      play.textContent = data[1].timeframes.weekly.current + "hrs";
      playLast.textContent = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
    
      study.textContent = data[2].timeframes.weekly.current + "hrs";
      studyLast.textContent = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
    
      exercise.textContent = data[3].timeframes.weekly.current + "hrs";
      exerciseLast.textContent = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
    
      social.textContent = data[4].timeframes.weekly.current + "hrs";
      socialLast.textContent = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
    
      selfcare.textContent = data[5].timeframes.weekly.current + "hrs";
      selfcareLast.textContent = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
    });

    monthlyButton.addEventListener("click", () => {
      monthlyButton.classList.add("active");
      weeklyButton.classList.remove("active");
      dailyButton.classList.remove("active");

      work.textContent = data[0].timeframes.monthly.current + "hrs";
      workLast.textContent = `Last Week - ${data[0].timeframes.monthly.previous}hrs`;
    
      play.textContent = data[1].timeframes.monthly.current + "hrs";
      playLast.textContent = `Last Week - ${data[1].timeframes.monthly.previous}hrs`;
    
      study.textContent = data[2].timeframes.monthly.current + "hrs";
      studyLast.textContent = `Last Week - ${data[2].timeframes.monthly.previous}hrs`;
    
      exercise.textContent = data[3].timeframes.monthly.current + "hrs";
      exerciseLast.textContent = `Last Week - ${data[3].timeframes.monthly.previous}hrs`;

      social.textContent = data[4].timeframes.monthly.current + "hrs";
      socialLast.textContent = `Last Week - ${data[4].timeframes.monthly.previous}hrs`;
    
      selfcare.textContent = data[5].timeframes.monthly.current + "hrs";
      selfcareLast.textContent = `Last Week - ${data[5].timeframes.monthly.previous}hrs`;
    });
  });