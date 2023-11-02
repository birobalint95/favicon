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
                    // dictOfSkills[skill].push(roleToDisplay);
                    dictOfSkills[skill]["roles"].push(roleToDisplay);
                    dictOfSkills[skill]["timeIntervals"].push(role.time);
                } else {
                    // dictOfSkills[skill] = [roleToDisplay];
                    dictOfSkills[skill] = {};
                    dictOfSkills[skill]["roles"] = [roleToDisplay];
                    dictOfSkills[skill]["timeIntervals"] = [role.time];
                }
            }
        }

        // for (const [skill, roles] of Object.entries(dictOfSkills)) {
        //     createSkillCard(skill, roles);
        // };
        for (const [skill, skillAttributes] of Object.entries(dictOfSkills)) {
            createSkillCard(skill, skillAttributes);
        }
    });
};

// function createSkillCard(skill, roles) {
function createSkillCard(skill, skillAttributes) {

    let timeIntervals = skillAttributes["timeIntervals"]
    let roles = skillAttributes["roles"];
 
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
    const textOfSummary = document.createTextNode(`${skill}`);
    spanOfSummary.appendChild(textOfSummary);
    summaryOfSkillCard.appendChild(spanOfSummary);

    // PARAGRAPH OF SUMMARY
    const paragraphOfSummary = document.createElement("p");
    paragraphOfSummary.setAttribute("class", "about-role-count");
    paragraphOfSummary.setAttribute("style", "font-size: 80%;");
    // paragraphOfSummary.insertAdjacentHTML("beforeend", `in <span class="number-of-roles">${roles.length.toString()}</span> roles`)

    let sumSpentTime = 0;
    for(let timeInterval of timeIntervals){
        console.log(timeInterval)
        console.log(calculateSpentTime(timeInterval));
        sumSpentTime += calculateSpentTime(timeInterval);
    }
    let spentTimeInWords = getWords(sumSpentTime);
    paragraphOfSummary.insertAdjacentHTML("beforeend", `${spentTimeInWords}, in <span class="number-of-roles">${roles.length.toString()}</span> roles`)
    summaryOfSkillCard.appendChild(paragraphOfSummary);

    // UNORDERED LIST OF DETAILS
    const unorderedListOfSkillCard = document.createElement("ul");
    unorderedListOfSkillCard.setAttribute("class", "skill-description");
    unorderedListOfSkillCard.setAttribute("style", "padding-left: 90px; font-size: 80%; padding-top: 0px;");

    for(let role of roles){
        const listItem = document.createElement("li");
        const textOfListItem = document.createTextNode(`${role}`);
        listItem.appendChild(textOfListItem);
        unorderedListOfSkillCard.appendChild(listItem);
    }

    // FINALIZE SKILLCARD
    skillCard.appendChild(summaryOfSkillCard);
    skillCard.appendChild(unorderedListOfSkillCard)
    skillCard.addEventListener("toggle", function() {
        isDetailsOpen = skillCard.hasAttribute("open");
        numberOfRoles = skillCard.getElementsByClassName("number-of-roles")[0];
        numberOfRolesInt = parseInt(numberOfRoles.innerText);
        if (isDetailsOpen) {
            requiredHeight = 90 + (numberOfRolesInt - 1)*27;
            skillCard.style.height = requiredHeight.toString() + "px";
        } else {
            skillCard.style.height = "70px";
        }
    })

    // ADD SKILLCARD TO ITS SECTION
    const skillCardSection = document.getElementById("skill-cards-section");
    skillCardSection.appendChild(skillCard);
    
}


function calculateSpentTime(intervalString){
    const partsOfString = intervalString.split(" - ");
  
    let startDate = partsOfString[0];
    let splitStartDate = startDate.split(" ");
    let startYear = splitStartDate[0];
    let startMonth = splitStartDate[1];
  
    let endDate = partsOfString[1];
    let splitEndDate = endDate.split(" ");
    let endYear = splitEndDate[0];
    let endMonth = splitEndDate[1];
  
    let spentTime = monthDiff(
        new Date(startYear, getMonthFromString(startMonth), 1), 
        new Date(endYear, getMonthFromString(endMonth), 1)
    )
    
    return spentTime;
}
  
function getMonthFromString(mon){
    return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
}
  
function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
  
function getWords(monthCount) {
    function getPlural(number, word) {
        return number === 1 && word.one || word.other;
    }

    var months = { one: 'month', other: 'months' },
        years = { one: 'year', other: 'years' },
        m = monthCount % 12,
        y = Math.floor(monthCount / 12),
        result = [];

    y && result.push(y + ' ' + getPlural(y, years));
    m && result.push(m + ' ' + getPlural(m, months));
    return result.join(' and ');
}