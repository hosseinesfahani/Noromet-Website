document.addEventListener("DOMContentLoaded", () => {
    // مدیریت منوی اصلی (dropdown-toggle)
    document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            const parent = toggle.parentElement;

            // بستن بقیه منوها
            document.querySelectorAll(".dropdown").forEach((el) => {
                if (el !== parent) el.classList.remove("active");
            });

            // باز و بسته کردن منوی فعلی
            parent.classList.toggle("active");
        });
    });

    // مدیریت ساب‌منو (dropdown-sub-toggle)
    document.querySelectorAll(".dropdown-sub-toggle").forEach((subToggle) => {
        subToggle.addEventListener("click", (e) => {
            e.preventDefault();
            const parent = subToggle.parentElement;

            // بستن بقیه ساب‌منوها
            document.querySelectorAll(".dropdown-sub").forEach((el) => {
                if (el !== parent) el.classList.remove("active");
            });

            // باز و بسته کردن ساب‌منوی فعلی
            parent.classList.toggle("active");
        });
    });

    // کلیک بیرون برای بستن همه منوها
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach((el) => el.classList.remove("active"));
            document.querySelectorAll(".dropdown-sub").forEach((el) => el.classList.remove("active"));
        }
    });
});
