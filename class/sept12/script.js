const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi";
    helloP.classList.add("special");
}



window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("button-click").onclick = changeText;

}