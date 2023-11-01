document.body.onload = createSkillCards;

function createSkillCards(){
    fetch("./static/json/role_details.json")
    .then(function(response){
    return response.json();
    })
    .then(function(roles){    
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
            createSkillCard(skill, roles);
        };

    });
};



function createSkillCard(skill, roles) {
 
    // DETAILS
    const skillCard = document.createElement("details");
    skillCard.setAttribute("class", "about-skill-details skill-card");
    skillCard.setAttribute("style", "display: flex;");

    // SUMMARY OF DETAILS
    const summaryOfSkillCard = document.createElement("summary");
    summaryOfSkillCard.setAttribute("class", "about-skill-name");

    // SPAN OF SUMMARY
    const spanOfSummary = document.createElement("span");
    spanOfSummary.setAttribute("class", "about-skill-description");
    spanOfSummary.setAttribute("style", "font-weight: bold;");
    const textOfSummary = document.createTextNode("HELLO");
    spanOfSummary.appendChild(textOfSummary);
    summaryOfSkillCard.appendChild(spanOfSummary);

    // PARAGRAPH OF SUMMARY
    const paragraphOfSummary = document.createElement("p");
    paragraphOfSummary.setAttribute("class", "about-role-count");
    paragraphOfSummary.setAttribute("style", "font-size: 80%;");
    paragraphOfSummary.insertAdjacentHTML("beforeend", `in <span class="number-of-roles">3</span> roles`)
    summaryOfSkillCard.appendChild(paragraphOfSummary);

    // UNORDERED LIST OF DETAILS
    const unorderedListOfSkillCard = document.createElement("ul");
    unorderedListOfSkillCard.setAttribute("class", "skill-description");
    unorderedListOfSkillCard.setAttribute("style", "padding-left: 90px; font-size: 80%; padding-top: 0px;");
    const listItem = document.createElement("li");
    const textOfListItem = document.createTextNode("Test Automation Product Owner");
    listItem.appendChild(textOfListItem);
    unorderedListOfSkillCard.appendChild(listItem);

    // ADD SKILLCARD TO ITS SECTION
    skillCard.appendChild(summaryOfSkillCard);
    skillCard.appendChild(unorderedListOfSkillCard);
    const skillCardSection = document.getElementById("skill-cards-section");
    skillCardSection.appendChild(skillCard);
    
}
