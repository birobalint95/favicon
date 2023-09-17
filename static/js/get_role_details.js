fetch("./static/json/role_details.json")
.then(function(response){
   return response.json();
})
.then(function(roles){
    let placeholder = document.querySelector("#list-of-roles");
    let out = "";
    var indexOfRole = 1;
    var role_class = "rb-item"
    for(let role of roles){
        if (indexOfRole = 1) {
            role_class += " selected"
        }
        out += `
            <li class=${role_class} ng-repeat="itembx">
                <a id=${role.id} href="javascript:void(0)" onclick="selectPosition(this.id)">
                    <div class="item-title">${role.title}</div>
                    <div class="timestamp">
                        ${role.company}<br>${role.area}
                    </div>
                </a>
            </li>
        `;
        indexOfRole++
   }
   placeholder.innerHTML = out;
});
