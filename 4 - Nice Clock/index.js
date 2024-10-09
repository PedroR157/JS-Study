function updateClock() {
    const now = new Date();

    // let hours = now.getHours();
    // const meridiem = hours >= 12 ? "PM" : "AM";
    // hours = hours % 12 || 12;
    // hours = hours.toString().padStart(2,0);

    const hours = now.getHours().toString().padStart(2,0);
    const min = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${min}:${sec}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock,1000);