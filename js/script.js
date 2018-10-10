$(document).ready(() => {
    $('form').validate();

   
    $('#second-box').hide();
    $('#first-box').hide();
    $('#third-box').hide();

    $('#box1').on('mouseenter', () => {
        $('#first-box').show("slow");
    }).on('mouseleave', () => {
        $('#first-box').hide('slow');
    });

    $('#box2').on('mouseenter', () => {
        $('#second-box').show('slow');
    }).on('mouseleave', () => {
        $('#second-box').hide('slow');
    });

    $('#box3').on('mouseenter', () => {
        $('#third-box').show('slow');
    }).on('mouseleave', () => {
        $('#third-box').hide('slow');
    });




    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("box1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    
})