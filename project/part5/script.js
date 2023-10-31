document.addEventListener("DOMContentLoaded", function() {
    // Fetch and parse the JSON data
    const url = "https://aysanchez30.github.io/project/part5/about.json"
        .then(response => response.json())
        .then(data => {
            // Display mission statement
            document.getElementById("mission-content").textContent = data["Mission Statement"]["content"];

            // Display team members
            const teamMembers = data["Team"];
            const teamContainer = document.getElementById("team-members");

            teamMembers.forEach(member => {
                const memberDiv = document.createElement("div");
                memberDiv.classList.add("team-member");

                const img = document.createElement("img");
                img.src = member.img;

                const name = document.createElement("h3");
                name.textContent = member.name;

                const description = document.createElement("p");
                description.textContent = member.description;

                memberDiv.appendChild(img);
                memberDiv.appendChild(name);
                memberDiv.appendChild(description);

                teamContainer.appendChild(memberDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching JSON data: ", error);
        });
});
