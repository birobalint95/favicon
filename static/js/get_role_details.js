fetch("./static/json/role_details.json")
.then(function(response){
   return response.json();
})
.then(function(roles){
    let placeholder = document.querySelector("#list-of-roles");
    let out = "";
    for(let role of roles){
        out += `
            <li class="rb-item" ng-repeat="itembx">
                <a id=${role.id} href="javascript:void(0)" onclick="selectPosition(this.id)">
                    <div class="item-title">${role.title}</div>
                    <div class="timestamp">
                        ${role.company}<br> ${role.area}
                    </div>
                </a>
            </li>
        `;
   }
   placeholder.innerHTML = out;
});
