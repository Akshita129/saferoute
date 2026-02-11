// MAP
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showMap, showError);
} else {
  alert("Geolocation not supported");
}

function showMap(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let map = L.map('mapBox').setView([lat, lon], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  L.marker([lat, lon]).addTo(map)
    .bindPopup("You are here")
    .openPopup();
}

function showError() {
  alert("Location permission denied");
}

// PREMIUM DEMO
function demoPayment() {
  alert("Demo Mode: Payment gateway will be integrated in future.");
}