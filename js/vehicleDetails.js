// Form submission handling
document.querySelector(".details-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const vehicle_type = document.getElementById("vType").value.trim();
    const vehicle_number = document.getElementById("vNumber").value.trim();
    const vehicle_color = document.getElementById("vColor").value.trim();

    // Validate all fields are filled
    if (!vehicle_type || !vehicle_number || !vehicle_color) {
        alert("Please fill all the details!");
        return;
    }

    // Validate vehicle number (assuming you want exactly 10 characters)
    if (vehicle_number.length !== 10) {
        alert('Please enter a valid 10-character vehicle number!');
        return;
    }

    // Validate vehicle color (letters only, no numbers)
    const colorRegex = /^[A-Za-z\s]+$/; // Allows letters and spaces
    if (!colorRegex.test(vehicle_color)) {
        alert('Vehicle color should only contain letters (no numbers or special characters)!');
        return;
    }

    // If all validations pass
    alert("Account Registered Successfully...");
    // redirect to next page
    window.location.href = "index.html";
});