const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

let fontSize = 18;
let letters = "01..".split("");
let columns;
let drops;

function setupMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.ceil(canvas.width / fontSize);

    drops = Array.from({ length: columns }, () => 1);
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#990000";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setupMatrix(); // بار اول راه‌اندازی

setInterval(drawMatrix, 38);

// هنگام تغییر اندازه صفحه، تنظیم مجدد کن
window.addEventListener("resize", setupMatrix);
