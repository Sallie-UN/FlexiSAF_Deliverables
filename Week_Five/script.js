let hotelName = "AIE Hotels"; // String
let totalRooms = 50; // Number
let roomsBooked = 35; // Number
let isFullyBooked = false; // Boolean

if (roomsBooked >= totalRooms) {
  isFullyBooked = true;
}
let services = ["WiFi", "Swimming Pool", "Gym", "Airport Pickup"];

let hotel = {
  name: "AIE Hotels",
  location: "Lagos",
  rating: 5,
  luxury: true,
};

function availableRooms(total, booked) {
  return total - booked;
}

let serviceList = "";
for (let i = 0; i < services.length; i++) {
  serviceList += "<li>" + services[i] + "</li>";
}

let outputDiv = document.getElementById("output");

outputDiv.innerHTML =
  "<p><strong>Hotel Name:</strong> " +
  hotelName +
  "</p>" +
  "<p><strong>Total Rooms:</strong> " +
  totalRooms +
  "</p>" +
  "<p><strong>Rooms Booked:</strong> " +
  roomsBooked +
  "</p>" +
  "<p><strong>Available Rooms:</strong> " +
  availableRooms(totalRooms, roomsBooked) +
  "</p>" +
  "<p><strong>Is Fully Booked?</strong> " +
  isFullyBooked +
  "</p>" +
  "<p><strong>Hotel Location:</strong> " +
  hotel.location +
  "</p>" +
  "<p><strong>Services:</strong></p>" +
  "<ul>" +
  serviceList +
  "</ul>";
