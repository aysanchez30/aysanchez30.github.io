const begin = () => {
    //document.getElementById("square").classList.add("anim-square");

    const square = document.getElementById("square");
    const button = document.getElementById("button-move");
    //is it currently animating

    if(square.classList.contains("anim-square")) {
        square.classList.remove("anim-sqaure");

    } else {
        square.classList.add("anim-sqaure");
        button.innerHTML = "Stop";
    }
}
window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("button-click").onclick = begin;
}

