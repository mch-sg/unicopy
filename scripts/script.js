console.log("tjekker om det virker");



function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
    console.log(value);
}


// let copyText = document.querySelector(".copyText");

// copyText.querySelector("button").addEventListener("click", function() {
//     let input = copyText.querySelector("input.text");
//     copyToClipboard(input.value);
// });


// toggle light mode
// *
// *

var ta = document.getElementById('toggleLight');

ta.addEventListener("click", function onclick(event) {
    light();
});


// light mode
function light() {
    const tee = document.querySelector('#toggleLight');
    tee.classList.toggle('bi-moon');

    var element = document.body;
    element.classList.toggle("light-theme");

    // var
    var theme;

    if(element.classList.contains("light-theme")) {
        theme = "light";
    } else {
        theme = "dark";
    }

    // save localstorage
    localStorage.setItem("theme", JSON.stringify(theme));
}




function check() {
    // check localstorage for theme
    let getTheme = JSON.parse(localStorage.getItem("theme"));
    console.log(getTheme);

    if(getTheme === "light") {
        // document.body.classList = "light-theme";
        light();
    }


    // If user prefers light mode in os settings,
    // it will automatically change to light mode
    const lightModePreference = window.matchMedia("(prefers-color-scheme: light)");

    // specify event-type as first argument
    lightModePreference.addEventListener("change", e => e.matches && light());

}