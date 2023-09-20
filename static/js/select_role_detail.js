function selectRoleDetail(clicked_id) {
    var clickedElement = document.getElementById(clicked_id);
  var isElementSelected = clickedElement.classList.contains("selected");
  var allDetailSelectorItems = document.getElementsByClassName("detail-category");
  
      if (! isElementSelected) {
        [].forEach.call(allDetailSelectorItems, function(actualDetailSelectorItem) {
            if(actualDetailSelectorItem.style.display == "block"){
                actualDetailSelectorItem.classList.remove("selected");
            }
        });
    clickedElement.classList.add("selected");
    };
  
      var detailItemToLookFor = document.querySelector("[title=" + CSS.escape(clicked_id) + "]");
  
    var areDetailsDisplayed = detailItemToLookFor.classList.contains("displayed");
  var allDetailItems = document.getElementsByClassName("tab-content");
 
      if (! areDetailsDisplayed) {
        [].forEach.call(allDetailItems, function(actualDetailItem){
            if(actualDetailItem.style.display == "block"){
                actualDetailItem.classList.remove("displayed");
            }
        });
 detailItemToLookFor.classList.add("displayed");
    };
  
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
