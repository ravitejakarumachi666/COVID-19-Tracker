
const inputCountry=document.querySelector("#inputCountry");
const image=document.querySelector("#image");
display("India")

function result(){
    var val=inputCountry.value; 
    display(val) 
}
 
 function display(val){
    fetch("https://disease.sh/v3/covid-19/countries/"+val+"?strict=true")
    .then(response=>{
    return response.json();
    })
   .then(data=>{
    document.getElementById("countryname").textContent=data.country;
    document.getElementById("activecases").textContent=data.active;
    document.getElementById("totalcases").textContent=data.cases;
    document.getElementById("totaldeaths").textContent=data.deaths;
    document.getElementById("recovered").textContent=data.recovered;
    document.getElementById("image").src=data.countryInfo.flag;
    })  
 }