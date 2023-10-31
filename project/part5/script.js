document.addEventListener("DOMContentLoaded", () => {
    const jsonURL = "https://aysanchez30.github.io/project/part5/about.json";

    const missionContentElement = document.getElementById("mission-content");
    const teamMembersElement = document.getElementById("team-members");

    fetch(jsonURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            missionContentElement.textContent = data["Mission Statement"]["content"];

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
