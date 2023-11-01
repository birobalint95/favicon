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
        console.log(skill, roles);
    }


    detailsItemsOfSkills += `
        <details class="about-skill-details skill-card" style="display: flex;">
            <summary class="about-skill-name">
                <span class="about-skill-description" style="font-weight: bold;">Scaled Agile Framework</span>
                <p style="font-size: 80%;" class="about-role-count">in <span class="number-of-roles">3</span> roles</p>
            </summary>
            <ul class="skill-description" style="padding-left: 90px; font-size: 80%; padding-top: 0px;">
                <li>Test Automation Product Owner</li>
                <li>Automation & Framework Product Owner</li>
                <li>Chief Engineer</li>
            </ul>
        </details>
    `;

});


