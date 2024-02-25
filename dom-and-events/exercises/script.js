function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", () => {
        paragraph.innerText = "Houston, we have liftoff!";
        console.log(paragraph);
    })

    missionAbort.addEventListener("mouseover", () => {
        missionAbort.style.backgroundColor = "red";
        missionAbort.style.borderColor = "red";
        missionAbort.style.color = "white";
    })

    missionAbort.addEventListener("mouseout", () => {
        missionAbort.style.backgroundColor = "";
        missionAbort.style.borderColor = "";
        missionAbort.style.color = "";
    })

    missionAbort.addEventListener("click",  () => {
        console.log('clicked abort!')
        let response = window.confirm("Are you sure you want to abort the mission?");
        if(response){
            window.alert("Mission aborted! Space shuttle returning home");
        }
    })
}

window.addEventListener("load", init);