// Write your JavaScript code here.
// Remember to pay attention to page loading!
function loaded(){
    const takeoffBtn = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const landBtn = document.getElementById("landing");
    const abortBtn = document.getElementById("missionAbort");
    const upBtn = document.getElementById("up");
    const downBtn = document.getElementById("down");
    const rightBtn = document.getElementById("right");
    const leftBtn = document.getElementById("left");
    takeoffBtn.addEventListener("click", () => {
        let isReadyToTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(isReadyToTakeOff){
            takeoffBtn.disabled = true;
            landBtn.disabled = false;
            abortBtn.disabled = false;
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            //TODO: The shuttle height should increase by 10,000 miles..
        }
    })

    landBtn.addEventListener("click", () => {
        takeoffBtn.disabled = false;
        landBtn.disabled = true;
        abortBtn.disabled = true;
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        //TODO: The shuttle height should go down to 0.
    })
    
    abortBtn.addEventListener("click", () => {
        let confirmToAbort = window.confirm("Confirm that you want to abort the mission.");
        if(confirmToAbort){
            takeoffBtn.disabled = false;
            landBtn.disabled = true;
            abortBtn.disabled = true;
            flightStatus.textContent = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            //TODO: The shuttle height should go down to 0.
        }
    })

    upBtn.addEventListener("click", () => {
        //TODO: Move the rock image 0px upwards
    })  
    
    downBtn.addEventListener("click", () => {
        //TODO: Move the rock image 0px downwards
    })  

    rightBtn.addEventListener("click", () => {
        //TODO: Move the rock image 0px right
    })  

    leftBtn.addEventListener("click", () => {
        //TODO: Move the rock image 0px left
    })  
}
window.addEventListener("load", loaded);