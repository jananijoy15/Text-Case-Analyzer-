const input = document.getElementById("textInput");

input.addEventListener("input", updateStats);

function updateStats() {

    const text = input.value;

    const words = text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;

    document.getElementById("words").textContent = words;
    document.getElementById("characters").textContent = text.length;
}

function convertText(type) {

    const text = input.value.trim();

    if (text === "") {
        alert("Please enter some text!");
        return;
    }

    let result = "";

    if (type === "upper") {

        result = text.toUpperCase();

    } else if (type === "lower") {

        result = text.toLowerCase();

    } else if (type === "title") {

        result = text.toLowerCase().replace(
            /\b\w/g,
            letter => letter.toUpperCase()
        );

    } else if (type === "sentence") {

        result = text.toLowerCase().replace(
            /(^\s*\w|[.!?]\s*\w)/g,
            letter => letter.toUpperCase()
        );
    }

    document.getElementById("output").textContent = result;
}