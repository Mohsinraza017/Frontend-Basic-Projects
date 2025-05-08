const endDate = new Date("9 May, 2025 19:30:00").getTime();
const startDate = new Date().getTime();



let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis = (60 * 60 * 1000);
    const oneMinuteInMillis = (60 * 1000);
    const oneSecondInMillis = (1000);

    const days = Math.floor(distancePending / (oneDayInMillis));
    const hrs = Math.floor((distancePending % (oneDayInMillis) / (oneHourInMillis)));
    const mins = Math.floor((distancePending % (oneHourInMillis)) / (oneMinuteInMillis));
    const secs = Math.floor((distancePending % (oneMinuteInMillis)) / (oneSecondInMillis));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    const totalDistance = endDate - startDate;

    const percentageDistance = (distanceCovered / totalDistance) * 100;

    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if (distancePending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Match Started, Now you can watch";
        document.getElementById("progress-bar").style.width = "100%";
    }
}, 1000);























// const endDate = new Date("9 May, 2025 19:30:00").getTime();
// const startDate = new Date().getTime();

// const day = document.getElementById("days");
// const hour = document.getElementById("hours");
// const minute = document.getElementById("minutes");
// const second = document.getElementById("seconds");

// function updateTimer() {
//     const now = new Date().getTime();

//     const distanceCovered = now - startDate;
//     const distancePending = endDate - now;

//     const oneDayInMillis = (24 * 60 * 60 * 1000);
//     const oneHourInMillis = (60 * 60 * 1000);
//     const oneMinuteInMillis = (60 * 1000);
//     const oneSecondInMillis = (1000);

//     const days = Math.floor(distancePending / (oneDayInMillis));
//     const hrs = Math.floor((distancePending % (oneDayInMillis) / (oneHourInMillis)));
//     const mins = Math.floor((distancePending % (oneHourInMillis)) / (oneMinuteInMillis));
//     const secs = Math.floor((distancePending % (oneMinuteInMillis)) / (oneSecondInMillis));

//     day.innerHTML = days;
//     hour.innerHTML = hrs;
//     minute.innerHTML = mins;
//     second.innerHTML = secs;
// }

// setInterval(updateTimer, 1000);