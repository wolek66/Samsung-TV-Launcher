function updateClock() {
    const now = new Date();

    document.getElementById("clock").innerText =
        now.toLocaleTimeString("pl-PL", {
            hour: "2-digit",
            minute: "2-digit"
        });
}

updateClock();

setInterval(updateClock, 1000);
