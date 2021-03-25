const counter = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const pauseButton = document.getElementById("pause");
const heartButton = document.getElementById("heart");
const commentForm = document.getElementById("comment-form");
const restartButton = document.getElementById("restart");
let timer = setInterval(increaseCounter, 1000);

restartButton.style.visibility = "hidden";
restartButton.disabled = true;

function increaseCounter() {
    counter.innerText = parseInt(counter.innerText) + 1;
}
function decreaseCounter() {
    counter.innerText = parseInt(counter.innerText) - 1;
}

plusButton.addEventListener("click", () => {
    increaseCounter();
});

minusButton.addEventListener("click", () => {
    decreaseCounter();
});

pauseButton.addEventListener("click", () => {
    if (pauseButton.innerText === "pause") {
        clearInterval(timer);
        pauseButton.innerText = "resume";
        heartButton.style.visibility = "hidden";
        minusButton.style.visibility = "hidden";
        plusButton.style.visibility = "hidden";
        restartButton.style.visibility = "visible";
        restartButton.disabled = false;
    }
    else {
        timer = setInterval(increaseCounter, 1000);
        pauseButton.innerText = "pause";
        heartButton.style.visibility = "visible";
        minusButton.style.visibility = "visible";
        plusButton.style.visibility = "visible";
        restartButton.style.visibility = "hidden";
        restartButton.disabled = true;
    }
});

let likesArray = [];
let likesList = document.querySelector(".likes");
heartButton.addEventListener("click", () => {
    let currentNum = counter.innerHTML;
    if (likesArray[currentNum]) {
        likesArray[currentNum] += 1;
    }
    else {
        likesArray[currentNum] = 1;
    }
    let li = document.createElement("li");
    li.id = currentNum;

    let likeMessage = document.createTextNode(`${currentNum}: ${likesArray[currentNum]} likes`);

    if (document.getElementById(currentNum)) {
        document.getElementById(currentNum).remove();
    }
    li.appendChild(likeMessage);
    likesList.appendChild(li);

});

restartButton.addEventListener("click", () => {
    pauseButton.innerText = "pause";
    heartButton.style.visibility = "visible";
    minusButton.style.visibility = "visible";
    plusButton.style.visibility = "visible";
    restartButton.style.visibility = "hidden";
    restartButton.disabled = true;
    counter.innerText = 0;
    timer = setInterval(increaseCounter, 1000);
    commentList.innerHTML = " ";
    likesList.innerHTML = " ";
});

let commentList = document.getElementById("list");

commentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let comment = document.getElementById("comment-input").value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(comment));
    commentList.appendChild(li); 
});