document.addEventListener("DOMContentLoaded", function () {
    const calculator = document.getElementById("calculator");
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    // Apply styles dynamically using JavaScript
    calculator.style.width = "250px";
    calculator.style.margin = "50px auto";
    calculator.style.padding = "20px";
    calculator.style.textAlign = "center";
    calculator.style.border = "2px solid #000";
    calculator.style.borderRadius = "10px";
    calculator.style.boxShadow = "0 0 10px red";
    calculator.style.backgroundColor = "#000";

    display.style.width = "90%";
    display.style.height = "40px";
    display.style.fontSize = "20px";
    display.style.marginBottom = "10px";
    display.style.textAlign = "right";
    display.style.padding = "5px";
    display.style.border = "1px solid #000";
    display.style.borderRadius = "5px";
    display.style.backgroundColor="#fff";

    const buttonsContainer = document.getElementById("buttons");
    buttonsContainer.style.display = "grid";
    buttonsContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
    buttonsContainer.style.gap = "5px";

    buttons.forEach(button => {
        button.style.width = "50px";
        button.style.height = "50px";
        button.style.fontSize = "18px";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#ddd";
        button.style.transition = "background 0.2s";

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#bbb";
        });

        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#ddd";
        });

        button.addEventListener("click", () => {
            if (button.textContent === "C") {
                display.value = "";
            } else if (button.textContent === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else {
                display.value += button.textContent;
            }
        });
    });
});
