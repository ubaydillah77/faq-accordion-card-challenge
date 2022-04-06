// selec accordion button
let accordion = document.getElementsByClassName("accordion__question");

// loop over and add evenetlisterner
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        // adding active class to current element
        this.classList.toggle("active");

        const accAnswer = this.nextElementSibling;
        const arrow = this.firstElementChild;
        if (accAnswer.style.maxHeight) {
            accAnswer.style.maxHeight = null;
            arrow.style.transform = null;
        } else {
            accAnswer.style.maxHeight = accAnswer.scrollHeight + "px";
            arrow.style.transform = "rotate(180deg)";
        }
    });
}
