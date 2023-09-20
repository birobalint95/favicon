fetch("./static/json/role_details.json")
.then(function(response){
   return response.json();
})
.then(function(roles){
    let unorderedListOfRoles = document.querySelector("#list-of-roles");
    let listItemsOfRoles = "";

    let divOfContentOfRoles = document.querySelector("#content-of-roles");
    let contentOfRoles = "";
    
    let indexOfRole = 1;
    for(let role of roles){

        let classOfListItemOfRole = "rb-item"
        let classOfContentOfRole = "role-description"
        let skillsOfRoleHtml = "";

        if (indexOfRole == 1) {
            classOfListItemOfRole += " selected"
            classOfContentOfRole += " displayed"
        }

        listItemsOfRoles += `
            <li class="${classOfListItemOfRole}" ng-repeat="itembx">
                <a id=${role.id} href="javascript:void(0)" onclick="selectPosition(this.id)">
                    <div class="item-title">${role.title}</div>
                    <div class="timestamp">
                        ${role.company}<br>${role.area}
                    </div>
                </a>
            </li>
        `;

        for(let skill of role.skills){
            skillsOfRoleHtml += `
                <div>
                    <span class="role-skill">${skill.name}</span>
                    <p>${skill.description}</p>
                </div>
            `
        };

        contentOfRoles += `
            <div title="${role.id}" class="${classOfContentOfRole}">
                <div class="title-section">
                    <h2 class="role-title">${role.title}
                        <span class="date">${role.time}</span>
                    </h2>
                    <h4 class="company-title">${role.company}, ${role.area}</h4>
                </div>
                <div class="content-section">
                    <group id="group-of-details">
                        <a id="${role.id}-responsibilities" class="detail-category selected" href="#" onclick="selectRoleDetailTab(this.id)">Responsibilities</a>
                        <a id="${role.id}-skills" class="detail-category" href="#" onclick="selectRoleDetailTab(this.id)">Skills</a>
                        <a id="${role.id}-tools" class="detail-category" href="#" onclick="selectRoleDetailTab(this.id)">Tools</a>
                    </group>
                    <div id="tab-content-${role.id}-responsibilities" title="${role.id}-responsibilities" class="tab-content displayed">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?</p>
                        <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?</p>
                    </div>
                    <div id="tab-content-${role.id}-skills" title="${role.id}-skills" class="tab-content">
                        ${skillsOfRoleHtml}
                    </div>
                    <div id="tab-content-${role.id}-tools" title="${role.id}-tools" class="tab-content">
                        <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?</p>
                    </div>
                </div>
            </div>
        `;

        indexOfRole++;
   }

   unorderedListOfRoles.innerHTML = listItemsOfRoles;
   divOfContentOfRoles.innerHTML = contentOfRoles;
});
