$(document).ready (function() {
    var labelSelectorCheckboxes = document.getElementsByClassName("labelSelectorCheckbox");
    for (var i = 0; i < labelSelectorCheckboxes.length; i++) {
        // add event listeners to clicking on these checkboxes
        labelSelectorCheckboxes[i].addEventListener('click', labelSelectorFunction, false);
    }
});

function labelSelectorFunction(){
    console.log("SZIA");
};
