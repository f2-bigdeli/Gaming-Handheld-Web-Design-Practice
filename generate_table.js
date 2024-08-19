document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("#handhelds-table tbody");

    handhelds.forEach(handheld => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${handheld.Brand}</td>
            <td>${handheld.Model}</td>
            <td>${handheld.Material}</td>
            <td>${handheld.OS}</td>
            <td>${handheld.Length}</td>
            <td>${handheld.Width}</td>
            <td>${handheld.Tickness}</td>
            <td>${handheld.Weight}</td>
            <td>${handheld["Screen Size"]}</td>
            <td>${handheld["Screen Resolution"]}</td>
            <td>${handheld["Screen type"]}</td>
            <td>${handheld.Battery}</td>
            <td>${handheld.Price}</td>
            <td>${handheld.Chipset}</td>
            <td>${handheld["Number of cores"]}</td>
            <td>${handheld.RAM}</td>
            <td>${handheld["Number of colors"]}</td>
            <td>${handheld.Type}</td>
        `;

        tableBody.appendChild(row);
    });
});
