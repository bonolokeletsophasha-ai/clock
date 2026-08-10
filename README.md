Digital Clock

A simple and responsive digital clock built using **HTML, CSS, and JavaScript**. The clock displays the current time and automatically updates every second without requiring the page to be refreshed.


This project was created as part of the **Melsoft Academy Clock Project**.

The main goal of the project is to create a functional digital clock while learning how to use JavaScript's `Date()` object, setInterval(), and DOM manipulation.

Features

*  Displays the current hours, minutes, and seconds
*  Automatically updates every second
*  Displays time in AM/PM format
*  Toggle between 12-hour and 24-hour formats
*  Displays the current date
*  Dark mode and light mode
*  Responsive design for different screen sizes
*  Modern and clean user interface
*  Supports a custom background image

Technologies used:

* HTML5 – Used to create the structure of the webpage
* CSS – Used for styling, layout, responsiveness, and the background
* Javascript – Used to retrieve and update the current time and date


How it works

HTML

The index.html file provides the structure of the clock, including:

* Clock display
* Current date
* 12/24-hour format button
* Dark/light mode button

CSS

The style.css file controls the appearance of the website, including:

* Page layout
* Colors
* Fonts
* Clock size
* Background image
* Buttons
* Dark mode
* Mobile responsiveness

JavaScript

The script.js file controls the functionality of the clock.

The JavaScript uses the Date() object to retrieve the current time.

javascript
const now = new Date();


The setInterval() function is then used to update the clock every second:

javascript
setInterval(updateClock, 1000);


DOM manipulation is used to display the updated time and date on the webpage.



