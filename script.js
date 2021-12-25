const active = document.querySelector(".active");
const button = document.querySelectorAll(".btn");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.querySelector(".plus").classList.remove("--minus");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.querySelector(".plus").classList.add("--minus");
        }
    });
}