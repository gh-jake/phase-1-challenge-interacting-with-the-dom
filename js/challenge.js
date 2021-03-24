document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const counter = document.getElementById("counter");
    let seconds = 0;
    function incrementSeconds() {
        seconds += 1;
        counter.innerText = seconds;
    }
    const interval = setInterval(incrementSeconds, 1000);

    const pauseButton = document.getElementById("pause");
    let isPause = false;
    pauseButton.addEventListener("click", function(event) {
        event.preventDefault();
        if (isPause === false) {
            clearInterval(interval);
            likeButton.style.visibility = "hidden";
            minus.style.visibility = "hidden";
            plus.style.visibility = "hidden";
            pauseButton.innerText = "resume";
            isPause = true;
        }
        else { //if button is resume
            likeButton.style.visibility = "visible";
            minus.style.visibility = "visible";
            plus.style.visibility = "visible";
            pauseButton.innerText = "pause";
            isPause = false;
        }
    });

    const likeButton = document.getElementById("heart");
    let howManyLikes = 0;
    let listedNum;
    likeButton.addEventListener("click", function(event) {
        event.preventDefault();

        /*howManyLikes += 1;
        const likeList = document.querySelector(".likes");
        let currentSec = counter.innerText;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(currentSec + ": " + howManyLikes + " likes" ));
        likeList.appendChild(li);

        
        check if current sec is equal to sec of previous like
        if number is new, add list item, set counter to one
        if number is old, counter ++, update list item
        */
    });

    const minus = document.getElementById("minus");
    minus.addEventListener("click", function(event) {
        event.preventDefault();
        seconds -= 1;
        counter.innerText = seconds;
    });

    const plus = document.getElementById("plus");
    plus.addEventListener("click", function(event) {
        event.preventDefault();
        seconds += 1;
        counter.innerText = seconds;
    });

    const form = document.getElementById("comment-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let inputValue = document.getElementById("comment-input").value;
      let commentList = document.getElementById("list");
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(inputValue));
      commentList.appendChild(li);  
    });
  
  });