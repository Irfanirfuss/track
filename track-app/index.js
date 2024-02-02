let steps = document.querySelectorAll(".num");
let line = document.querySelectorAll(".line");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let currentStep = 0;

function progress() {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add("active");
            step.innerHTML = '<i class="fa-solid fa-check"></i>';
            line[index].classList.add("active");
        } else {
            step.classList.remove("active");
            line[index].classList.remove("active");
            step.textContent = index + 1;
        }
    });
}
progress();

next.addEventListener("click", () => {
    if (currentStep < steps.length) {
        currentStep++;
        progress();
    }
});

prev.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        progress();
    }
});
