myitem = document.getElementById("firsttest");

// Change the color and fontsize of the text when we move over it; change it back when we move off of it

    myitem.addEventListener("mouseover", onMouseOver);
    myitem.addEventListener("mouseout", onMouseOut)
    function onMouseOver() {  
        myitem.style.color = "darkgreen";  
        myitem.style.fontsize = "2em"
    } //font color and size changing
    function onMouseOut() {
        myitem.style.color = "";
        myitem.style.fontsize = ""
    } //returning to default color and size
    
    // now adding a button for the Honors & Awards list on Resume Part 1

    thebutton = document.getElementById("thebutton");  
    otheritem = document.getElementById("buttontest");

    thebutton.addEventListener("click", onButtonClick);
    function onButtonClick() {  
        otheritem.style.color = "red";  
    }
    
    //now adding a second button for the essay thesis on the Essay page
    thebutton2 = document.getElementById("thebutton2");  
    otheritem = document.getElementById("buttontest2");

    thebutton2.addEventListener("click", onButtonClick);
    function onButtonClick() {  
        otheritem.style.color = "red";  
    }
    function onButtonClick() {
        otheritem.innerHTML = "I clicked the button";
    }
   
    // input text function from the bottom of the Essay page
    
textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);
function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}
   