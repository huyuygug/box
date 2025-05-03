// Đợi DOM load xong mới chạy
document.addEventListener("DOMContentLoaded", function () {
    const stopButton = document.getElementById("stopBtn");
    const star = document.querySelector(".gift__bow");
    const gift = document.querySelector(".gift__lid");
    const gift4 = document.querySelector(".gift__box");

    let hasb = false
    function nhan(){
        
    }
    // Khi nhấn nút "Dừng hiệu ứng"
    stopButton.addEventListener("click", function() {
        gift4.style.animation = "openhop 1s forwards";
        star.style.animation = "no 1s forwards"; // Dừng hiệu ứng
        gift.style.animation = "opennap 1s forwards"; // Dừng hiệu ứng
    });
});
