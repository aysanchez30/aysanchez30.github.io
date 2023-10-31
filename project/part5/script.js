document.addEventListener("DOMContentLoaded", () => {
    // URL of the JSON file
    const jsonURL = "https://aysanchez30.github.io/project/part5/about.json"; // Replace with your JSON file URL

    // HTML elements where JSON data will be displayed
    const missionContentElement = document.getElementById("mission-content");
    const teamMembersElement = document.getElementById("team-members");

    // Fetch the JSON data from the URL
    fetch(jsonURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Display the Mission Statement content
            missionContentElement.textContent = data["Mission Statement"]["content"];

            // Display the Team members
            data["Team"].forEach(member => {
                const memberElement = document.createElement("div");
                memberElement.innerHTML = `
                    <h2>${member.name}</h2>
                    <p>${member.description}</p>
                    <img src="${member.img}" alt="${member.name}">
                `;
                teamMembersElement.appendChild(memberElement);
            });
        })
        .catch(error => {
            console.error("Error fetching or displaying JSON data:", error);
        });
});
