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
    pauseButton.addEventListener("click", function(event) {
        event.preventDefault();
        counter.clearInterval(interval);
        alert("pause pressed");
    });

    const likeButton = document.getElementById("like");
    likeButton.addEventListener("click", function(event) {
        event.preventDefault();
        
    });

    const form = getElementById("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let inputValue = document.getElementById("comment-input").value;
      let commentList = document.getElementById("list");
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(inputValue));
      commentList.appendChild(li);
      alert("form submitted");
  
    });
  
  });