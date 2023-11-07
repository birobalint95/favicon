export {createStudyItems};

function createStudyItems(introJsonData){ 

    let jsonDataOfStudies = introJsonData["studies"];

    let indexOfRole = 1;
    for(let study of jsonDataOfStudies){

        // *TIMELINE SECTION*

        // LIST ITEM ELEMENT
        let classOfListItemOfStudy = "study-item";
        if (indexOfRole == 1) {
            classOfListItemOfStudy += " selected"
        }
        const listItemOfStudy = document.createElement("li");
        listItemOfStudy.setAttribute("class", `${classOfListItemOfStudy}`);
        listItemOfStudy.setAttribute("ng-repeat", "itembx");

        // ANCHOR OF LIST ITEM
        const anchorOfListItem = document.createElement("a");
        anchorOfListItem.setAttribute("id", "university-degree-study");
        anchorOfListItem.setAttribute("href", "javascript:void(0)");
        anchorOfListItem.addEventListener("click", getStudyDetails);

        // RESULT OF STUDY
        const resultOfStudy = document.createElement("div");
        resultOfStudy.setAttribute("class", "education-result");
        resultOfStudy.insertAdjacentHTML("beforeend", `${study.result}`)
        anchorOfListItem.appendChild(resultOfStudy);

        // LOCATION OF STUDY
        const locationOfStudy = document.createElement("div");
        locationOfStudy.setAttribute("class", "education-location");
        locationOfStudy.insertAdjacentHTML("beforeend", `${study.institution}<br>${study.location}`)
        anchorOfListItem.appendChild(locationOfStudy);

        // ADD ANCHOR TO LIST ITEM
        listItemOfStudy.appendChild(anchorOfListItem);

        // ADD STUDY TO ITS SECTION
        const studySection = document.getElementById("list-of-studies");
        studySection.appendChild(listItemOfStudy);

        indexOfRole++;

    }
};
