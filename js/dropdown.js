document.addEventListener("DOMContentLoaded", () => {
    // باز و بسته کردن منوی کالج
    document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            const parent = toggle.parentElement;
            parent.classList.toggle("active");
        });
    });

    // باز و بسته کردن زیرمنوی دوره‌ها
    document.querySelectorAll(".dropdown-sub-toggle").forEach((subToggle) => {
        subToggle.addEventListener("click", (e) => {
            e.preventDefault();
            const parent = subToggle.parentElement;
            parent.classList.toggle("active");
        });
    });

    // کلیک خارج از منو برای بستن همه چیز
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            // بستن منوهای اصلی
            document.querySelectorAll(".dropdown").forEach((el) => el.classList.remove("active"));

            // بستن زیرمنوها همزمان
            document.querySelectorAll(".dropdown-sub").forEach((el) => el.classList.remove("active"));
        }
    });
});
