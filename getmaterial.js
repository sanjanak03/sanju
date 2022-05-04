$(document).ready(
    function (){
        
        var url ="https://www.teamup.ink/varadhi_backend/app_apis/get_material.php";
        
        axios(
            {
                url: url,
            method :"get"
        }
        ).then(function(response){
            if(response.data == 'No Data Found'){
                document.getElementById('material').innerHTML = 'No Data Found';
            }else {
                document.getElementById('material').innerHTML = buildUI(response.data);
            }
        });

});

function buildUI(data) {
    var ui = '';
    for(var i=0 ; i<data.length; i++){
        console.log(data[i]['cover']);

        ui = ui + `
        <div class="colummns">
          <div class="cards4">
           <img src="http://www.teamup.ink/varadhi_backend/materials/${data[i]['cover']}" alt="pic" width="105%" height="150px">
           </div><br>
          
    <h4 class="txt">${data[i]['name']}</h4>
    <p class="txt">${data[i]['subject']}</p>
        </div>`



       
}
return ui;
}

// ui = ui + `<div class="grid-item">
// <button onclick="material"(${data[i]['id']})">

// <img src="http://www.teamup.ink/varadhi_backend/materials/8history.jpg" height="150px" width="100%"></button>

// <p class="txt">${data[i]['8th class history']}</p>
// <p class="txt">${data[i]['History']}</p>
// </div>`
       