let count = 1;

const slide = () => {
    const Quote = document.querySelector(
        `#slideshow :nth-child(${count})`
    );
    count++;

    let followingQuote = Quote.nextElementSibling;

    if (followingQuote == null) {
        followingQuote = document.querySelector("#slideshow :first-child");
        count = 1;
    }

    Quote.classList.add("slideHide");
    followingQuote.classList.add("slideShow");
};

window.onload = () => {
    setInterval(slide, 2000);
};