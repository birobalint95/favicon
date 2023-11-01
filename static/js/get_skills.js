fetch("./static/json/role_details.json")
.then(function(response){
   return response.json();
})
.then(function(roles){
    
    let sectionOfSkillCards = document.querySelector("#skill-cards-section");
    let detailsItemsOfSkills = ""

    var dictOfSkills = {};
    for(let role of roles){
        roleToDisplay = role.area + " " + role.title;
        for(let skill of role.skills){
            if (skill in dictOfSkills) {
                dictOfSkills[skill].push(roleToDisplay);
            } else {
                dictOfSkills[skill] = [roleToDisplay];
            }
        }
    }

    for (const [skill, roles] of Object.entries(dictOfSkills)) {

        summaryOfDetailsItem = `
            <summary class="about-skill-name">
                <span class="about-skill-description" style="font-weight: bold;">${skill}</span>
                <p style="font-size: 80%;" class="about-role-count">in <span class="number-of-roles">${roles.length.toString()}</span> roles</p>
            </summary>
        `;

        listItemsofDetailsItem = ""
        for(let role of roles){
            listItemsofDetailsItem += `<li>${role}</li>`
        }
        unorderedListOfDetailsItem = `
            <ul class="skill-description" style="padding-left: 90px; font-size: 80%; padding-top: 0px;">
            ${listItemsofDetailsItem}
            </ul>
        `;

        detailsItemsOfSkills += `
            <details class="about-skill-details skill-card" style="display: flex;">
            ${summaryOfDetailsItem}
            ${unorderedListOfDetailsItem}
            </details>
        `;
    }

    // sectionOfSkillCards.innerHTML = detailsItemsOfSkills;

});


