# Digital and Analog Clocks

This project consists of two clocks:
- **Analog Clock**: A traditional clock with hour, minute, and second hands.
- **Digital Clock**: A 12-hour format digital clock displaying hours, minutes, seconds, and the current date.

## Features:
- **Analog Clock**: Displays real-time movement of the hour, minute, and second hands.
- **Digital Clock**: Displays the time in a 12-hour format with AM/PM, and it shows the current date.


## Project Structure:
- **JavaScript**: The logic to update the clocks in real-time.
- **HTML**: Structure and elements for both the analog and digital clocks.
- **CSS**: Styles to make the clocks visually appealing.


## How It Works:

### Analog Clock:
- The clock uses `Date()` to get the current time.
- The `setTime()` function calculates the angles for the hour, minute, and second hands.
- The angles are calculated based on the full revolution of each hand:
  - **Seconds**: 360 degrees in 60 seconds.
  - **Minutes**: 360 degrees in 60 minutes.
  - **Hours**: 360 degrees in 12 hours.
- The hands rotate using the `transform` property in CSS.

### Digital Clock:
- The clock also uses `Date()` to retrieve the current time.
- The `setDigitalTime()` function formats the time to display in a 12-hour format.
- It adds leading zeros for single-digit minutes and seconds and updates the AM/PM indicator.


## Project links
- [GitHub Repository](https://github.com/harithas1/Analog_Clock_and_Digital_Clock.git)

- [Live Demo](https://harithas1.github.io/Analog_Clock_and_Digital_Clock/) 
