function myfunL() {
  const l = document.getElementById("lik");
  l.addEventListener("click", () => {
    const r = document.getElementById("like-count");
    r.innerHTML = Number(r.innerHTML) + 1;
  });
}

function myfunD() {
  const l = document.getElementById("dislike");
  l.addEventListener("click", () => {
    const r = document.getElementById("dislike-count");
    r.innerHTML = Number(r.innerHTML) + 1;
  });
}
function t() {
    if(document.body.style.backgroundColor=="white"){
        document.body.style.backgroundColor = "#8ba9da";
        document.getElementById("restrict").style.backgroundColor="#8ba9da";
        document.getElementById("restrict1").style.backgroundColor="#8ba9da";  
       }
    else
        document.body.style.backgroundColor="white";
}

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }