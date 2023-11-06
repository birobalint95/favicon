function getStudyDetails(clicked_id) {
    var clickedElement = document.getElementById(clicked_id);
    var isElementSelected = clickedElement.classList.contains("selected");
    var allStudyItems = document.getElementsByClassName("study-item");

    if (! isElementSelected) {
        [].forEach.call(allStudyItems, function(actualStudyItem) {
            actualStudyItem.classList.remove("selected");
        });
    clickedElement.parentElement.classList.add("selected");
    };

    var studyContent = document.querySelector("[title=" + CSS.escape(clicked_id) + "]");
    var isStudyContentDisplayed = studyContent.classList.contains("displayed");
    var allStudyContentItems = document.getElementsByClassName("study-content");

    if (! isStudyContentDisplayed) {
        [].forEach.call(allStudyContentItems, function(actualStudyContentItem){
            actualStudyContentItem.classList.remove("displayed");
        });
        studyContent.classList.add("displayed");
    };
};
