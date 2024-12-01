function accordion_toggle(target){
    //console.log was used to test thatthe function was working. 
    // console.log("open");
    // console.log(target);

    //closes a section before opening another one. 
    
    //create a reference to all sections using
    //the class name specified in the HTML
    var divsToHide = document.getElementsByClassName("accordion-section"); //divsToHide is an array
    //loop through each section
    for(var i = 0; i < divsToHide.length; i++){
        //hide each section
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }

    //create a reference to an element with the
    //same name as the target variable
    var content = document.getElementById(target);
    //check if the content is currently displayed
    if (content.style.display === "block"){
        //hide the content
        content.style.display ="none";
    }
    else{
        //display the content
        content.style.display= "block";
    }
    
}