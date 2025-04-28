// Đợi DOM load xong mới chạy
document.addEventListener("DOMContentLoaded", function () {
    const stopButton = document.getElementById("stopBtn");
    const star = document.querySelector(".gift__bow");
    const gift1 = document.querySelector(".gift__bow-left");
    const gift2 = document.querySelector(".gift__bow-right");
    const gift = document.querySelector(".gift__lid");
    const gift3 = document.querySelector(".gift__lid-shadow");
    const gift4 = document.querySelector(".gift__box");
    // Khi nhấn nút "Dừng hiệu ứng"
    stopButton.addEventListener("click", function() {
        gift4.style.animationPlayState = "paused";
        star.style.animationPlayState = "paused"; // Dừng hiệu ứng
        gift1.style.animationPlayState = "paused"; // Dừng hiệu ứng
        gift2.style.animationPlayState = "paused"; // Dừng hiệu ứng
        gift.style.animationPlayState = "paused"; // Dừng hiệu ứng
        gift3.style.animationPlayState = "paused"; // Dừng hiệu ứng
    });
});
