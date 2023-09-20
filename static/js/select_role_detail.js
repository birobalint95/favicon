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
    var roleDetailSelectorId = "product-owner-2-responsibilities";

    var allRoleDetailSelectorItems = document.getElementsByClassName("detail-category");
    [].forEach.call(allRoleDetailSelectorItems, function(actualRoleDetailSelectorItem) {
        if(actualRoleDetailSelectorItem.id == roleDetailSelectorId){
            actualRoleDetailSelectorItem.classList.add("selected");
        } else {
            actualRoleDetailSelectorItem.classList.remove("selected");
        }
    });
};
