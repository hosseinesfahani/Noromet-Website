document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    // باز و بسته کردن سایدبار با دکمه همبرگر
    toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // جلوگیری از کلیک عمومی
        sidebar.classList.toggle("active");
    });

    // جلوگیری از بسته شدن موقع کلیک داخل خود سایدبار
    sidebar.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // کلیک در بیرون سایدبار، سایدبار را می‌بندد
    document.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});
