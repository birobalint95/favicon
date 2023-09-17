fetch("./static/json/role_details.json")
.then(function(response){
   return response.json();
})
.then(function(roles){
    let placeholder = document.querySelector("#list-of-roles");
    let out = "";
    let indexOfRole = 1;
    for(let role of roles){
        let roleClass = "rb-item"
        if (indexOfRole == 1) {
            roleClass += " selected"
        }
        out += `
            <li class="${roleClass}" ng-repeat="itembx">
                <a id=${role.id} href="javascript:void(0)" onclick="selectPosition(this.id)">
                    <div class="item-title">${role.title}</div>
                    <div class="timestamp">
                        ${role.company}<br>${role.area}
                    </div>
                </a>
            </li>
        `;
        indexOfRole++;
   }
   placeholder.innerHTML = out;
});
