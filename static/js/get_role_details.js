fetch("./static/json/role_details.json")
.then(function(response){
   return response.json();
})
.then(function(roles){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let role of roles){
      out += `
         <tr>
            <td>${role.title}</td>
            <td>${role.company}</td>
            <td>${role.area}</td>
            <td>${role.selected}</td>
         </tr>
      `;
   }
   placeholder.innerHTML = out;
});