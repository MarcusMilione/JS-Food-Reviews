const Submit = document.getElementById("send-data");

const Form = document.getElementById("inputs");

// let x = document.getElementById("results");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        // x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude +
    //     "<br>Longitude: " + position.coords.longitude;

    document.getElementById("ll").value = position.coords.latitude + "," + position.coords.longitude;

}

window.onload = getLocation;

const inputs = document.getElementById("inputs");

inputs.addEventListener("submit", (evt) => {
    evt.preventDefault();

const results = document.getElementById('results')
const url = 'http://localhost:3000/form';
const inputData = new FormData(inputs)
console.log(inputData.entries());

const formDataToJSON = data => [...data].reduce((obj, [key, val]) => Object.assign(obj, { 
    [key]: val }), {}) 
    


    var dataToJSON = formDataToJSON(inputData);
   console.log(dataToJSON)

    fetch(url, {
    method: 'POST',
    body:  JSON.stringify(dataToJSON),
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
    
    }) 
    .then((resp) => resp.json())
    .then(function(venues) {
        console.log(venues);
    })


    .catch(function(error) {

    });


    
})