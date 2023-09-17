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

        contentOfRoles += `
            <div title="${role.id}" class="${classOfContentOfRole}">
                <div class="title-section">
                    <h2 class="role-title">${role.title}
                        <span class="date">${role.time}</span>
                    </h2>
                    <h4 class="company-title">${role.company}, ${role.area}</h4>
                </div>
                <div class="content-section">
                    ${role.content}
                </div>
            </div>
        `;

        indexOfRole++;
   }

   unorderedListOfRoles.innerHTML = listItemsOfRoles;
   divOfContentOfRoles.innerHTML = contentOfRoles;
});
