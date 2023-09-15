document.addEventListener("DOMContentLoaded",function(){

function updateDateTime() {
    const currentDateElement = document.getElementById("current-date");

    const now = new Date();

    // Get the date in a readable format (e.g., "September 10, 2023")
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, dateOptions);

    // Get the current time (e.g., "10:00 AM")
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedTime = now.toLocaleTimeString(undefined, timeOptions);

    // Update the HTML elements with the new date and time
    currentDateElement.textContent =  `${formattedDate} ${formattedTime}`;
}

// Call the updateDateTime function to set the initial date and time
updateDateTime();

})