document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("advanced-search-form");
    const resultsContainer = document.getElementById("search-results");

    // Function to populate dropdowns with unique values from the handhelds data
    function populateDropdown(id, property) {
        const dropdown = document.getElementById(id);
        dropdown.innerHTML = ''; // Clear any existing options

        // Add the "All" option as the first option
        const allOption = document.createElement("option");
        allOption.value = ""; // Empty value to indicate "all"
        allOption.textContent = "All";
        dropdown.appendChild(allOption);

        // Get unique values from the handhelds data
        const uniqueValues = [...new Set(handhelds.map(handheld => handheld[property]))];

        uniqueValues.sort().forEach(value => {
            if (value) {
                const option = document.createElement("option");
                option.value = value;
                option.textContent = value;
                dropdown.appendChild(option);
            }
        });
    }

    // Function to update slider values display and ensure dual range functionality
    function updateDualSlider(minId, maxId, minDisplayId, maxDisplayId) {
        const minSlider = document.getElementById(minId);
        const maxSlider = document.getElementById(maxId);
        const minDisplay = document.getElementById(minDisplayId);
        const maxDisplay = document.getElementById(maxDisplayId);

        function updateDisplay() {
            minDisplay.textContent = minSlider.value;
            maxDisplay.textContent = maxSlider.value;

            // Ensure min slider doesn't surpass max slider value
            if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
                minSlider.value = maxSlider.value;
                minDisplay.textContent = minSlider.value;
            }

            // Ensure max slider doesn't go below min slider value
            if (parseInt(maxSlider.value) < parseInt(minSlider.value)) {
                maxSlider.value = minSlider.value;
                maxDisplay.textContent = maxSlider.value;
            }
        }

        minSlider.addEventListener("input", updateDisplay);
        maxSlider.addEventListener("input", updateDisplay);

        // Initialize display value
        updateDisplay();
    }

    // Populate all dropdowns
    populateDropdown("brandSelect", "Brand");
    populateDropdown("osSelect", "OS");
    populateDropdown("screenTypeSelect", "Screen type");
    populateDropdown("typeSelect", "Type");

    // Update dual slider values display
    updateDualSlider("lengthRange", "lengthRangeMax", "lengthMinValue", "lengthMaxValue");
    updateDualSlider("widthRange", "widthRangeMax", "widthMinValue", "widthMaxValue");
    updateDualSlider("thicknessRange", "thicknessRangeMax", "thicknessMinValue", "thicknessMaxValue");
    updateDualSlider("weightRange", "weightRangeMax", "weightMinValue", "weightMaxValue");
    updateDualSlider("screenSizeRange", "screenSizeRangeMax", "screenSizeMinValue", "screenSizeMaxValue");
    updateDualSlider("batteryRange", "batteryRangeMax", "batteryMinValue", "batteryMaxValue");
    updateDualSlider("priceRange", "priceRangeMax", "priceMinValue", "priceMaxValue");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the values from the form
        const minLength = document.getElementById("lengthRange").value;
        const maxLength = document.getElementById("lengthRangeMax").value;
        const minWidth = document.getElementById("widthRange").value;
        const maxWidth = document.getElementById("widthRangeMax").value;
        const minThickness = document.getElementById("thicknessRange").value;
        const maxThickness = document.getElementById("thicknessRangeMax").value;
        const minWeight = document.getElementById("weightRange").value;
        const maxWeight = document.getElementById("weightRangeMax").value;
        const minScreenSize = document.getElementById("screenSizeRange").value;
        const maxScreenSize = document.getElementById("screenSizeRangeMax").value;
        const minBattery = document.getElementById("batteryRange").value;
        const maxBattery = document.getElementById("batteryRangeMax").value;
        const minPrice = document.getElementById("priceRange").value;
        const maxPrice = document.getElementById("priceRangeMax").value;

        const brand = document.getElementById("brandSelect").value;
        const os = document.getElementById("osSelect").value;
        const screenType = document.getElementById("screenTypeSelect").value;
        const type = document.getElementById("typeSelect").value;

        // Filter the handhelds based on the criteria
        const filteredHandhelds = handhelds.filter(handheld => {
            return (
                (handheld.Length >= minLength && handheld.Length <= maxLength) &&
                (handheld.Width >= minWidth && handheld.Width <= maxWidth) &&
                (handheld.Tickness >= minThickness && handheld.Tickness <= maxThickness) &&
                (handheld.Weight >= minWeight && handheld.Weight <= maxWeight) &&
                (handheld["Screen Size"] >= minScreenSize && handheld["Screen Size"] <= maxScreenSize) &&
                (handheld.Battery >= minBattery && handheld.Battery <= maxBattery) &&
                (handheld.Price >= minPrice && handheld.Price <= maxPrice) &&
                (brand === "" || handheld.Brand === brand) &&
                (os === "" || handheld.OS === os) &&
                (screenType === "" || handheld["Screen type"] === screenType) &&
                (type === "" || handheld.Type === type)
            );
        });

        // Display the results
        resultsContainer.innerHTML = "";
        if (filteredHandhelds.length > 0) {
            const resultList = document.createElement("ul");
            filteredHandhelds.forEach(handheld => {
                const listItem = document.createElement("li");
                listItem.textContent = `${handheld.Brand} ${handheld.Model} - Price: $${handheld.Price}`;
                resultList.appendChild(listItem);
            });
            resultsContainer.appendChild(resultList);
        } else {
            resultsContainer.textContent = "No handhelds match the selected criteria.";
        }
    });
});
