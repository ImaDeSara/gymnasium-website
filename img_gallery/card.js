/*
code to change the active card 
Enables the selection of a single element from a group of elements with the same class name and visually distinguishes it as active by adding an "active" class to it while removing it from all other elements. 
*/
imgCard = document.querySelectorAll(".img-card"); //selects all the HTML elements that have a class of "img-card" using the querySelectorAll method
imgCard.forEach(element => {
    element.addEventListener("click", function(e) { //adds a click event listener to each of those elements using the forEach method
        //remove active class  
        imgCard.forEach(el => {  
            el.classList.remove("active"); 
        });    
        element.classList.add("active"); 
    })      
});  

/*
code to change the button color of the active one
function enables the user to click on any button in a group of buttons and visually mark the clicked button as active while removing the active class from all other buttons
*/
function changeActiveButton(btn) {
  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.gallery .buttons .btn'); 
  buttons.forEach(button => button.classList.remove('active')); 
  // Add active class to clicked button
  btn.classList.add('active'); 
}  


//code to get a random background color
function color(z) {
    var a = getComputedStyle(z); //getComputedStyle method to get the computed style of the specified element
    var b = a.backgroundColor; //extracts the background color from the computed style using the backgroundColor property, and stores it in a variable named b
    document.getElementsByTagName("BODY")[0].style.backgroundColor=b; //selects the <body> element using the getElementsByTagName method, gets its style using style.backgroundColor, and sets it equal to the background color of the specified element z
} 

//change the background color of a web page to a random color
function changeColor() {
     document.body.style.backgroundColor = 
    'rgb(' + Math.round(Math.random()*255) +
    ',' + Math.round(Math.random()*255) +
    ',' + Math.round(Math.random()*255) + ')';  
}    

// font size changing
function changeFontSize(size) {  
    // Define an array with the IDs of the paragraphs to update
    var paragraphs = ['paragraph1', 'paragraph2', 'paragraph3', 'paragraph4', 'paragraph5', 'paragraph6', 'paragraph7', 'paragraph8', 'paragraph9'];
    // Loop through the array and update each paragraph's font size
    for (let i = 0; i < paragraphs.length; i++) {
        var paragraph = document.getElementById(paragraphs[i]);
        if (paragraph) { // Check if the paragraph exists
            paragraph.style.fontSize = size + "px"; // Change font size of p tag
        }
    }   
}
