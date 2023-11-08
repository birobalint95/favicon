export {createExperienceItems};

function createExperienceItems(rolesJsonData){ 

    let indexOfRole = 1;
    for(let role of rolesJsonData){

        let classOfListItemOfExperience = "experience-item";
        let classOfExperienceContentDiv = "experience-content";
        if (indexOfRole == 1) {
            classOfListItemOfExperience += " selected"
            classOfExperienceContentDiv += " displayed"
        }

        // *** TIMELINE SECTION ***

        // LIST ITEM ELEMENT
        const listItemOfExperience = document.createElement("li");
        listItemOfExperience.setAttribute("class", `${classOfListItemOfExperience}`);
        listItemOfExperience.setAttribute("ng-repeat", "itembx");

        // ANCHOR OF LIST ITEM
        const anchorOfListItem = document.createElement("a");
        let idOfAnchor = `${role.area}-${role.title}`.toLowerCase().replace(/ /g, "-"); // remove role id from json
        anchorOfListItem.setAttribute("id", `${idOfAnchor}`);
        anchorOfListItem.setAttribute("href", "javascript:void(0)");
        anchorOfListItem.addEventListener("click", getStudyDetails); // check later

        // TITLE OF ROLE
        const titleOfRole = document.createElement("div");
        titleOfRole.setAttribute("class", "item-title");
        titleOfRole.insertAdjacentHTML("beforeend", `${role.title}`)
        anchorOfListItem.appendChild(titleOfRole);

        // TIMESTAMP OF ROLE
        const timestampOfRole = document.createElement("div");
        timestampOfRole.setAttribute("class", "timestamp");
        timestampOfRole.insertAdjacentHTML("beforeend", `${role.company}<br>${role.area}`)
        anchorOfListItem.appendChild(timestampOfRole);

        // ADD ANCHOR TO LIST ITEM
        listItemOfExperience.appendChild(anchorOfListItem);

        // ADD EXPERIENCE LIST ITEM TO ITS SECTION
        const experienceSection = document.getElementById("experiences-list");
        experienceSection.appendChild(listItemOfExperience);

        // *** CONTENT SECTION ***

        // EXPERIENCE CONTENT DIV ELEMENT
        const experienceContentDiv = document.createElement("div");
        experienceContentDiv.setAttribute("title", `${idOfAnchor}`);
        experienceContentDiv.setAttribute("class", `${classOfExperienceContentDiv}`);

        // TITLE SECTION OF EXPERIENCE CONTENT
        const titleSectionOfExperienceContent = document.createElement("div");
        titleSectionOfExperienceContent.setAttribute("class", "experience-title-section");

        // TITLE
        const experienceTitle = document.createElement("h2");
        experienceTitle.setAttribute("class", "experience-title");
        const textOfExperienceTitle = document.createTextNode(`${role.title}`);
        experienceTitle.appendChild(textOfExperienceTitle);

        // DATE
        const dateOfExperience = document.createElement("span");
        dateOfExperience.setAttribute("class", "experience-date");
        const textOfDate = document.createTextNode(`${role.time}`);
        dateOfExperience.appendChild(textOfDate);
        experienceTitle.appendChild(dateOfExperience);

        // ADD EXPERIENCE TITLE TO TITLE SECTION 
        titleSectionOfExperienceContent.appendChild(experienceTitle);

        // LOCATION
        const experienceLocation = document.createElement("h4");
        experienceLocation.setAttribute("class", "experience-location");
        const textOfExperienceLocation = document.createTextNode(`${role.company}, ${role.area}`);
        experienceLocation.appendChild(textOfExperienceLocation);

        // ADD LOCATION TO TITLE SECTION 
        titleSectionOfExperienceContent.appendChild(experienceLocation);

        // ADD TITLE SECTION TO EXPERIENCE CONTENT
        experienceContentDiv.appendChild(titleSectionOfExperienceContent);

        // CONTENT OF CONTENT SECTION
        const contentSectionOfExperienceContent = document.createElement("div");
        contentSectionOfExperienceContent.setAttribute("class", "content-section");

        // GROUP OF DETAILS
        const groupOfDetails = document.createElement("group");
        groupOfDetails.setAttribute("id", "group-of-details");

        let indexOfDetail = 1;
        const divsOfDescriptions = [];
        ['Responsibilities','Skills','Tools'].forEach(function(detail) {
            let classOfDetail = "detail-category";
            if (indexOfDetail == 1) {
                classOfDetail += " selected"
            }

            // ANCHOR OF GROUP
            const anchorOfDetail = document.createElement("a");
            anchorOfDetail.setAttribute("id", `${role.id}-${detail}`.toLowerCase());
            anchorOfDetail.setAttribute("class", `${classOfDetail}`);
            anchorOfDetail.setAttribute("href", "#");
            // anchorOfDetail.addEventListener("click", getStudyDetails); // later
            anchorOfDetail.innerHTML = `${detail}`;
            groupOfDetails.appendChild(anchorOfDetail);

            // DESCRIPTION OF DETAIL
            const divOfDescriptionOfDetail = document.createElement("div");
            divOfDescriptionOfDetail.setAttribute("id", `tab-content-${role.id}-${detail}`.toLowerCase());
            divOfDescriptionOfDetail.setAttribute("title", `${role.id}-${detail}`.toLowerCase());
            divOfDescriptionOfDetail.setAttribute("class", "tab-content");
            const paragraphOfDescriptionOfDetail = document.createElement("p");
            paragraphOfDescriptionOfDetail.insertAdjacentHTML("beforeend", "Placeholder")
            divOfDescriptionOfDetail.appendChild(paragraphOfDescriptionOfDetail)
            divsOfDescriptions.push(divOfDescriptionOfDetail);

            indexOfDetail++;
        });

        contentSectionOfExperienceContent.appendChild(groupOfDetails);
        for(let divOfDescription of divsOfDescriptions){
            contentSectionOfExperienceContent.appendChild(divOfDescription);
        }

        // ADD CONTENT SECTION TO EXPERIENCE CONTENT
        experienceContentDiv.appendChild(contentSectionOfExperienceContent);

        // ADD EXPERIENCE CONTENT TO ITS SECTION
        const experienceContentSection = document.getElementById("content-of-experiences");
        experienceContentSection.appendChild(experienceContentDiv);

        indexOfRole++;

    }
};
