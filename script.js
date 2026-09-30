
// Greeting functionality

const button = document.getElementById("greetBtn");

button.addEventListener("click", function () {

    const name = document.getElementById("nameInput").value;

    if (name !== "") {
        document.getElementById("greeting").innerText =
            "Hello, " + name;
    }

});


// Color box functionality

const boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {

    box.addEventListener("click", function () {

        const color = box.getAttribute("data-color");

        box.style.backgroundColor = color;

        if (color === "yellow") {
            box.style.color = "black";
        } else {
            box.style.color = "white";
        }

    });

});

