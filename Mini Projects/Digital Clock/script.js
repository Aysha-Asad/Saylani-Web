//setInterval is used to update the time every second it is an inbuilt function in javascript
setInterval(() => {
    document.getElementById("time").textContent = new Date().toLocaleString();
    }, 1000);