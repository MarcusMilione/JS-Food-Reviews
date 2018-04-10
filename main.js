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



// var result = document.getElementById("results");
// results.innerHTML = 