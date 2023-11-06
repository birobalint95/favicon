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

    // var roleContent = document.querySelector("[title=" + CSS.escape(clicked_id) + "]");
    // var isRoleContentDisplayed = roleContent.classList.contains("displayed");
    // var allRoleContentItems = document.getElementsByClassName("role-description");

    // if (! isRoleContentDisplayed) {
    //     [].forEach.call(allRoleContentItems, function(actualRoleContentItem){
    //         actualRoleContentItem.classList.remove("displayed");
    //     });
    // roleContent.classList.add("displayed");
    // };

    // selectRoleDetailTab(CSS.escape(clicked_id) + "-responsibilities")
};

function selectRoleDetailTab(roleDetailSelectorId){
    var allRoleDetailSelectorItems = document.getElementsByClassName("detail-category");
    [].forEach.call(allRoleDetailSelectorItems, function(actualRoleDetailSelectorItem) {
        var actualRoleDetailContentItem = document.querySelector("[title=" + CSS.escape(actualRoleDetailSelectorItem.id) + "]");
        if(actualRoleDetailSelectorItem.id == roleDetailSelectorId){
            actualRoleDetailSelectorItem.classList.add("selected");
            actualRoleDetailContentItem.classList.add("displayed");
        } else {
            actualRoleDetailSelectorItem.classList.remove("selected");
            actualRoleDetailContentItem.classList.remove("displayed");
        }
    });
};