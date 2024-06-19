const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');
const toggleFormatButton = document.getElementById('toggle-format');

let is24HourFormat = false;

function updateClock() {
    const now = new Date();

    // Format date
    const date = now.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    dateElement.innerText = date;

    // Format time
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let ampm = '';

    if (!is24HourFormat) {
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12 || 12;
    }

    const time = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}${ampm}`;
    timeElement.innerText = time;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    toggleFormatButton.innerText = is24HourFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
    updateClock();
}

toggleFormatButton.addEventListener('click', toggleFormat);

// Initial call to display the clock immediately
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);
