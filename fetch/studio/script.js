//TODO: Add Your Code Below
window.addEventListener("load", () => {
    const containerDiv = document.getElementById("container");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then((data) => data.json())
        .then((data) => data.forEach(element => {
            numOfAstronouts = data.length;
            containerDiv.innerHTML += 
            `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${element.firstName} ${element.lastName}</h3>
                        <ul>
                        <li>Hours in space: ${element.hoursInSpace}</li>
                        <li>Active: ${element.active}</li>
                        <li>Skills: ${ [...element.skills] }</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${element.picture}>
                </div>
            `;
        }))
})