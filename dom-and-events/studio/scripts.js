// Write your JavaScript code here.
// Remember to pay attention to page loading!
function loaded(){
    const takeoffBtn = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const landBtn = document.getElementById("landing");
    const abortBtn = document.getElementById("missionAbort");
    const upBtn = document.getElementById("up");
    const downBtn = document.getElementById("down");
    const rightBtn = document.getElementById("right");
    const leftBtn = document.getElementById("left");
    const rocket = document.getElementById('rocket');

    takeoffBtn.addEventListener("click", () => {
        let isReadyToTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(isReadyToTakeOff){
            takeoffBtn.disabled = true;
            landBtn.disabled = false;
            abortBtn.disabled = false;
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
            rocket.style.bottom = "auto";
        }
    })

    landBtn.addEventListener("click", () => {
        takeoffBtn.disabled = false;
        landBtn.disabled = true;
        abortBtn.disabled = true;
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.bottom = "0px";
    })
    
    abortBtn.addEventListener("click", () => {
        let confirmToAbort = window.confirm("Confirm that you want to abort the mission.");
        if(confirmToAbort){
            takeoffBtn.disabled = false;
            landBtn.disabled = true;
            abortBtn.disabled = true;
            flightStatus.textContent = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.bottom = "0px";
        }
    })

    upBtn.addEventListener("click", () => {
        //TODO: Move the rock image 10px upwards
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    })  
    
    downBtn.addEventListener("click", () => {
        //TODO: Move the rock image 10px downwards
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    })  

    rightBtn.addEventListener("click", () => {
        //TODO: Move the rock image 10px right
    })  

    leftBtn.addEventListener("click", () => {
        //TODO: Move the rock image 10px left
    })  
}
window.addEventListener("load", loaded);