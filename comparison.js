document.addEventListener("DOMContentLoaded", function() {
    // Assuming handhelds_data.js is already loaded before this script
    // handhelds array is available globally

    const handheld1Input = document.getElementById("handheld1");
    const handheld2Input = document.getElementById("handheld2");
    const suggestions1 = document.getElementById("suggestions1");
    const suggestions2 = document.getElementById("suggestions2");
    const comparisonForm = document.getElementById("comparison-form");
    const comparisonResult = document.getElementById("comparison-result");

    function filterHandhelds(query) {
        return handhelds.filter(handheld => handheld.Model.toLowerCase().includes(query.toLowerCase()));
    }

    function displaySuggestions(inputElement, suggestionsElement, query) {
        suggestionsElement.innerHTML = "";
        if (query.length > 0) {
            const filteredHandhelds = filterHandhelds(query);
            filteredHandhelds.forEach(handheld => {
                const suggestion = document.createElement("div");
                suggestion.textContent = handheld.Model;
                suggestion.addEventListener("click", () => {
                    inputElement.value = handheld.Model;
                    suggestionsElement.innerHTML = "";
                });
                suggestionsElement.appendChild(suggestion);
            });
        }
    }

    handheld1Input.addEventListener("input", () => {
        displaySuggestions(handheld1Input, suggestions1, handheld1Input.value);
    });

    handheld2Input.addEventListener("input", () => {
        displaySuggestions(handheld2Input, suggestions2, handheld2Input.value);
    });

    comparisonForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const model1 = handheld1Input.value.trim().toLowerCase();
        const model2 = handheld2Input.value.trim().toLowerCase();

        const handheld1 = handhelds.find(handheld => handheld.Model.toLowerCase() === model1);
        const handheld2 = handhelds.find(handheld => handheld.Model.toLowerCase() === model2);

        if (handheld1 && handheld2) {
            comparisonResult.innerHTML = `
                <h3>Comparison of ${handheld1.Model} vs ${handheld2.Model}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>${handheld1.Model}</th>
                            <th>${handheld2.Model}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Brand</td><td>${handheld1.Brand}</td><td>${handheld2.Brand}</td></tr>
                        <tr><td>Material</td><td>${handheld1.Material}</td><td>${handheld2.Material}</td></tr>
                        <tr><td>OS</td><td>${handheld1.OS}</td><td>${handheld2.OS}</td></tr>
                        <tr><td>Length (mm)</td><td>${handheld1.Length}</td><td>${handheld2.Length}</td></tr>
                        <tr><td>Width (mm)</td><td>${handheld1.Width}</td><td>${handheld2.Width}</td></tr>
                        <tr><td>Thickness (mm)</td><td>${handheld1.Tickness}</td><td>${handheld2.Tickness}</td></tr>
                        <tr><td>Weight (g)</td><td>${handheld1.Weight}</td><td>${handheld2.Weight}</td></tr>
                        <tr><td>Screen Size (inches)</td><td>${handheld1["Screen Size"]}</td><td>${handheld2["Screen Size"]}</td></tr>
                        <tr><td>Screen Resolution</td><td>${handheld1["Screen Resolution"]}</td><td>${handheld2["Screen Resolution"]}</td></tr>
                        <tr><td>Screen Type</td><td>${handheld1["Screen type"]}</td><td>${handheld2["Screen type"]}</td></tr>
                        <tr><td>Battery (mAh)</td><td>${handheld1.Battery}</td><td>${handheld2.Battery}</td></tr>
                        <tr><td>Price ($)</td><td>${handheld1.Price}</td><td>${handheld2.Price}</td></tr>
                        <tr><td>Chipset</td><td>${handheld1.Chipset}</td><td>${handheld2.Chipset}</td></tr>
                        <tr><td>Number of Cores</td><td>${handheld1["Number of cores"]}</td><td>${handheld2["Number of cores"]}</td></tr>
                        <tr><td>RAM (GB)</td><td>${handheld1.RAM}</td><td>${handheld2.RAM}</td></tr>
                        <tr><td>Number of Colors</td><td>${handheld1["Number of colors"]}</td><td>${handheld2["Number of colors"]}</td></tr>
                        <tr><td>Type</td><td>${handheld1.Type}</td><td>${handheld2.Type}</td></tr>
                    </tbody>
                </table>
            `;
        } else {
            comparisonResult.innerHTML = "<p>One or both models not found. Please check the model names and try again.</p>";
        }
    });
});
