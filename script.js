let container = document.querySelector("#container");
let change_button = document.querySelector("#change");

change_button.addEventListener("click", () => {
    container.replaceChildren();
    let grid_size = parseInt(prompt("Enter how many box per side (max 100): "));
    for (let i = 0; i < grid_size**2; i++) {
        let square = document.createElement("div");
        square.style.boxSizing = "border-box";
        square.style.width = (640 / grid_size) + "px";
        square.style.height = (640 / grid_size) + "px";
        // square.style.border = "1px solid black";
        square.addEventListener("mouseover", () => {
            square.classList.add("highlight");
        });
        square.addEventListener("mouseleave", () => {
            // set delay to remove highlight so that the color doesn't disappear immediately
            setTimeout(() => {
                square.classList.remove("highlight");
            }, 1200);
        });
        container.appendChild(square);
    }
});

for(let i = 0; i < 16**2; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        square.classList.add("highlight")
    });
    square.addEventListener("mouseleave", () => {
        // set delay to remove highlight so that the color doesn't disappear immediately
        let timeoutId = setTimeout(() => {
            square.classList.remove("highlight");
        }, 1200);
    })
    container.appendChild(square);
}

