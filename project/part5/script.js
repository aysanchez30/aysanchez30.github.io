const getTeam = async () => {
    const url = "https://aysanchez30.github.io/project/part5/about.json";
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

const showTeam = async () => {
    const team = await getTeam();
    const teamList = document.getElementById("team-members");
    
    team.forEach(member => {
        teamList.appendChild(getTeamInfo(member));
    });
};

const getTeamInfo = (member) => {
    const section = document.createElement("section");

    const container1 = document.createElement("div");
    const container2 = document.createElement("div");
    container2.className = "container2";

    const h2 = document.createElement("h2");
    h2.innerHTML = member.name;

    const description = document.createElement("p");
    description.innerHTML = member.description;

    const img = document.createElement("img");
    img.src = member.img;

    section.appendChild(h2);
    section.appendChild(container1);
    section.appendChild(container2);

    container1.appendChild(img);

    container2.appendChild(h2);
    container2.appendChild(description);

    return section;
};

window.onload = () => {
    showTeam();
}
