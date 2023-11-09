function createGenericCardWithoutImage(text){
    // CARD ELEMENT
    const genericCardWithoutImage = document.createElement("div");
    genericCardWithoutImage.setAttribute("class", "generic-card");
    // TEXT OF CARD ELEMENT
    const textOfGenericCard = document.createElement("span");
    textOfGenericCard.setAttribute("class", "content-of-generic-card-without-image");
    textOfGenericCard.innerText = `${text}`;
    genericCardWithoutImage.appendChild(textOfGenericCard);
    return genericCardWithoutImage
}

function createGenericCardWithImage(text, image_location){
    // CARD ELEMENT
    const genericCardWithImage = document.createElement("div");
    genericCardWithImage.setAttribute("class", "generic-card");
    // IMAGE OF CARD ELEMENT
    const imgOfGenericCard = document.createElement("img");
    imgOfGenericCard.setAttribute("class", "image-of-generic-card");
    imgOfGenericCard.setAttribute("src", `${image_location}`);
    genericCardWithImage.appendChild(imgOfGenericCard)
    // TEXT OF CARD ELEMENT
    const textOfGenericCard = document.createElement("span");
    textOfGenericCard.setAttribute("class", "content-of-generic-card");
    textOfGenericCard.innerText = `${text}`;
    genericCardWithImage.appendChild(textOfGenericCard);
    return genericCardWithImage
}

function getStudyDetails() {
    var isElementSelected = this.classList.contains("selected");
    var allStudyItems = document.getElementsByClassName("study-item");

    if (! isElementSelected) {
        [].forEach.call(allStudyItems, function(actualStudyItem) {
            actualStudyItem.classList.remove("selected");
        });
    this.parentElement.classList.add("selected");
    };

    var studyContent = document.querySelector("[title=" + CSS.escape(this.id) + "]");
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

    let spacer = document.getElementById("rounded-spacer-for-tab-contents");
    if ($(aboutDetailSelector).index() == 0){
        spacer.style.borderRadius = "0 10px 0 0";
    } else if ($(aboutDetailSelector).index() == aboutDetailSelector.parentNode.children.length - 1) {
        spacer.style.borderRadius = "10px 0 0 0";
    } else {
        spacer.style.borderRadius = "10px 10px 0 0";
    }

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

function selectSkillArea(){
    console.log("HELLO");
    var numberOfCheckedLabelSelectorCheckboxes = document.querySelectorAll('.labelSelectorCheckbox:checked').length;
    console.log(numberOfCheckedLabelSelectorCheckboxes);
}
