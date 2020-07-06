const navTrigger = document.querySelector(".nav-opener");
const navCloser = document.querySelector(".nav-opener.close");
const navWrapper = document.querySelector(".nav-wrap");
const navItems = document.querySelectorAll(".nav li");

navTrigger.addEventListener("click", navOpener);

function navOpener(){
    navWrapper.classList.toggle("opened");
    navTrigger.classList.toggle("close");

    if(navTrigger.classList.contains("close")){
        navTrigger.textContent = "Close";
    }else{
        navTrigger.textContent = "Open";
        
    }
}


navWrapper.addEventListener("transitionend", function(){
    navItems.forEach(itemsHandler);
});


function itemsHandler(singleItem){
    
    if(navTrigger.classList.contains("close")){
        singleItem.classList.add("show-item");
    }else{
        singleItem.classList.remove("show-item");
    }
}