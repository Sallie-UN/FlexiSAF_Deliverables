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

// DOM Selectors
let header = document.querySelector("header");
let navLinks = document.querySelectorAll("nav a");
let bookingForm = document.querySelector("form");

// DOM Event + Callback Function (Header Click)

function changeHeaderColor() {
  header.style.backgroundColor = "#000";
  header.innerHTML +=
    "<p style='margin-top:10px;'>You clicked the header! DOM Event executed.</p>";
}

// Event Listener
if (header) {
  header.addEventListener("click", changeHeaderColor);
}

// DOM Event + Callback Function (Navigation Hover)

navLinks.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    link.style.color = "yellow";
  });

  link.addEventListener("mouseout", function () {
    link.style.color = "white";
  });
});

// DOM Event + Callback Function (Form Submit)

function formSubmitted(event) {
  alert("Booking form submitted successfully!");
}

// Add event listener only if form exists
if (bookingForm) {
  bookingForm.addEventListener("submit", formSubmitted);
}

// DOM Manipulation - Create New Element

let newParagraph = document.createElement("p");

newParagraph.textContent =
  "This content was added dynamically using DOM Manipulation.";

newParagraph.style.color = "#4b0082";
newParagraph.style.fontWeight = "bold";

if (outputDiv) {
  outputDiv.appendChild(newParagraph);
}

// Testimonial Data (Array)
let testimonials = [
  "Amazing service and beautiful environment!",
  "The rooms were extremely clean and comfortable.",
  "Best hotel experience I have had in Lagos.",
  "Excellent staff and great hospitality.",
];

// DOM Selector
let testimonialText = document.getElementById("testimonial-text");
let nextButton = document.getElementById("next-testimonial");

let testimonialIndex = 0;

// Callback Function
function showNextTestimonial() {
  testimonialIndex++;

  if (testimonialIndex >= testimonials.length) {
    testimonialIndex = 0;
  }

  testimonialText.textContent = testimonials[testimonialIndex];
}

// DOM Event
if (nextButton) {
  nextButton.addEventListener("click", showNextTestimonial);
}
