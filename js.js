//click function to manipulate a class of a element
function menuMob(id, active) { //parameters for element id and active class
    event.preventDefault(); //prevent default click
    let menu = document.getElementById(id); //capture de element id
    let activeClass = active; //set the active class

    if (menu.classList.contains(activeClass)) { //check if element has active class
        menu.classList.remove(activeClass); //if it has, remove it
    }else { //if not, set a class
        menu.classList.add(activeClass);
    }
} 

// change class on window scroll
window.onscroll = function changeNav(id, active) {
    const navBar = document.getElementById(id);
    const activeClass = active;
    let scrollPosY = window.pageYOffset | document.body.scrollTop;
    let userInnerh = window.innerHeight;
    
    if(scrollPosY > (userInnerh * 0.65)) {
        navBar.classList.add(activeClass);
    } else if(scrollPosY <= (userInnerh * 0.65)) {
        navBar.classList.remove(activeClass);
    }
}
