fetch("./static/json/role_details.json")
.then(function(response){
   return response.json();
})
.then(function(roles){
    var dictOfSkills = {};

    for(let role of roles){
        for(let skill of role.skills){
            if (skill in dictOfSkills) {
                console.log("mar van")
            } else {
                dictOfSkills[skill] = [role]
            }
        }
    }
});