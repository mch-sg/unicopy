console.log("tjekker om det virker");



function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
    console.log(value);
}


let copyText = document.querySelector(".copyText");

copyText.querySelector("button").addEventListener("click", function() {
    let input = copyText.querySelector("input.text");
    copyToClipboard(input.value);
});