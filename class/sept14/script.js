// const add = (a, b) => { return a+b;}

// console.log(add(5, 6));

// const square = a => a * a;

// console.log(square(5));

// const hello =() => console.log("Hello Me");

// hello();

// const helloSpecific = userName => console.log("Hello " + userName + "!");

// helloSpecific("Portia");

// const helloFullName = (firstName, lastName) => {
//     console.log("Hello " + firstName + " " + lastName);
//     console.log("You are awesome!");

// };

// helloFullName("portia" , "plante");

const begin = () => {
    document.getElementById("square").classList.add("anim-square");
}

const displayName = () => {
    const firstName = document.getElementbyId("txt-first-name").value;
    console.log("Hello " + firstName + "!");
}
window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("button-click").onclick = begin;
    document.getElementById("button-show-name").onclick = displayName;
}

