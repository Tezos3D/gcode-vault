const button = document.getElementById("connectBtn");
const status = document.getElementById("status");

button.addEventListener("click", function() {
    status.innerText = "Button clicked!";
});
