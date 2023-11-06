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

function selectAboutDetailTab(aboutDetailSelector){
    let aboutDetailSelectorId = aboutDetailSelector.id;
    console.log($(aboutDetailSelector).index());
    console.log($(aboutDetailSelector.parentNode.lastChild).index());
    var allRoleDetailSelectorItems = document.getElementsByClassName("detail-category");
    [].forEach.call(allRoleDetailSelectorItems, function(actualRoleDetailSelectorItem) {
        var actualRoleDetailContentItem = document.querySelector("[title=" + CSS.escape(actualRoleDetailSelectorItem.id) + "]");
        if(actualRoleDetailSelectorItem.id == aboutDetailSelectorId){
            actualRoleDetailSelectorItem.classList.add("selected");
            actualRoleDetailContentItem.classList.add("displayed");
        } else {
            actualRoleDetailSelectorItem.classList.remove("selected");
            actualRoleDetailContentItem.classList.remove("displayed");
        }
    });
};
