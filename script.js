const buttons = document.querySelectorAll(".project-toggle");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const details = button.nextElementSibling;

        details.classList.toggle("show");

        button.textContent =
            details.classList.contains("show")
            ? "Hide Details"
            : "View Project";

    });

});
