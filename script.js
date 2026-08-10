// Get elements from the HTML
const clock = document.getElementById("clock");
const date = document.getElementById("date");

const formatButton = document.getElementById("formatButton");
const themeButton = document.getElementById("themeButton");

// This variable controls the clock format
let is24Hour = false;


// FUNCTION TO UPDATE THE CLOCK
function updateClock() {

    // Get the current date and time
    const now = new Date();

    // Get hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // AM or PM
    let amPm = hours >= 12 ? "PM" : "AM";


    // 12-HOUR FORMAT
    if (!is24Hour) {

        // Convert 24-hour time to 12-hour time
        hours = hours % 12;

        // If hour is 0, change it to 12
        hours = hours === 0 ? 12 : hours;

    }


    // Add a zero to numbers below 10
    hours = hours < 10 ? "0" + hours : hours;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;


    // Display the clock
    if (is24Hour) {

        clock.innerText = `${hours}:${minutes}:${seconds}`;

    } else {

        clock.innerText = `${hours}:${minutes}:${seconds} ${amPm}`;

    }


    // Display the date
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    date.innerText = now.toLocaleDateString(
        "en-US",
        dateOptions
    );
}


// 12 / 24 HOUR BUTTON

formatButton.addEventListener("click", function () {

    // Change the format
    is24Hour = !is24Hour;

    // Change button text
    if (is24Hour) {

        formatButton.innerText = "12-Hour Format";

    } else {

        formatButton.innerText = "24-Hour Format";

    }

    // Update the clock immediately
    updateClock();

});


// DARK MODE BUTTON

themeButton.addEventListener("click", function () {

    // Add or remove dark mode
    document.body.classList.toggle("dark-mode");


    // Change button text
    if (document.body.classList.contains("dark-mode")) {

        themeButton.innerText = "Light Mode";

    } else {

        themeButton.innerText = "Dark Mode";

    }

});


// Run the clock immediately
updateClock();


// Update the clock every second
setInterval(updateClock, 1000);
