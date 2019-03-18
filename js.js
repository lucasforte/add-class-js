//click function to manipulate a class of a element

function menuMob(id, active) { //parameters for element id and active class
    event.preventDefault(); //prevent default click
    let menu = document.getElementById(id); //capture de element id
    const activeClass = active; //set the active class

    if (menu.classList.contains(activeClass)) { //check if element has active class
        menu.classList.remove(activeClass); //if it has, remove it
    }else { //if not, set a class
        menu.classList.add(activeClass);
    }
} 
