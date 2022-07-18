let hamBtn = document.querySelector(".hambtn")
let resNavBar = document.querySelector(".resnavbar")
let bgColor = document.querySelector(".bg-color")


hamBtn.addEventListener("click",()=>{

    if(resNavBar.style.transform == "translateX(200%)" || bgColor.style.display == "none" ||hamBtn.src == "./images/icon-hamburger.svg"){
  resNavBar.style.transform = "translateX(0%)" 
  bgColor.style.display = "block"
  hamBtn.src = "./images/icon-close.svg"
    }




  else  if(resNavBar.style.transform == "translateX(0%)" || bgColor.style.display == "block" ||hamBtn.src == "./images/icon-close.svg"){
        resNavBar.style.transform = "translateX(200%)" 
        bgColor.style.display = "none"
        hamBtn.src = "./images/icon-hamburger.svg"
          }



})

