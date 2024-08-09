let countDown = 10;
var timer = document.getElementById("sec");
timer.innerHTML = countDown--;

setTimeout(() => {
  timer.innerText = countDown--;
  setTimeout(() => {
    timer.innerText = countDown--;
    setTimeout(() => {
      timer.innerText = countDown--;
      setTimeout(() => {
        timer.innerText = countDown--;
        setTimeout(() => {
          timer.innerText = countDown--;
          setTimeout(() => {
            timer.innerText = countDown--;
            setTimeout(() => {
              timer.innerText = countDown--;
              setTimeout(() => {
                timer.innerText = countDown--;
                setTimeout(() => {
                  timer.innerText = countDown--;
                  setTimeout(() => {
                    timer.innerText = countDown--;
                    setTimeout(() => {
                      timer.innerText = "Happy Independence day"; 
                    },1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000)
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  },1000);