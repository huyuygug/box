// Đợi DOM load xong mới chạy
document.addEventListener("DOMContentLoaded", function () {
    const stopButton = document.getElementById("stopBtn");
    const star = document.querySelector(".gift__bow");
    const gift = document.querySelector(".gift__lid");
    const gift4 = document.querySelector(".gift__box");
    const text = document.querySelector(".text");
    const audio = new Audio('HappyBirthday-Guitar_4e3zq.mp3');
    audio.loop = true;

    // Khi nhấn nút "Dừng hiệu ứng"
    stopButton.addEventListener("click", function() {
        audio.play();
        gift4.style.animation = "openhop 5s forwards";
        star.style.animation = "no 1s forwards"; // Dừng hiệu ứng
        gift.style.animation = "opennap 1s forwards"; // Dừng hiệu ứng
        text.style.animation = "ease-in-out 5s xuathien forwards"; // Dừng hiệu ứng
        stopButton.style.animation = "ease-in-out kk 1s forwards";
    });
});
