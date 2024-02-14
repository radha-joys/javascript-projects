//TODO: Examine launchOutput() and the describe functions. Notice that there is quite a bit of repetition in the code.
//Try adding arrays, objects, and/or loops to refactor the code into a more efficient structure.

let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(n){
        if(n%2 === 0 && n%3 === 0 && n%5 === 0){
            return 'LaunchCode Rocks!'
        } else if(n%2 === 0 && n%3 === 0){
            return 'LaunchCode!'
        } else if(n%2 === 0 && n%5 === 0){
            return 'Launch Rocks! (CRASH!!!!)'
        } else if(n%3 === 0 && n%5 === 0){
            return 'Code Rocks!'
        } else if(n%2 === 0){
            return 'Launch!'
        } else if(n%3 === 0){
            return 'Code!'
        } else if(n%5 === 0){
            return 'Rocks!'
        } else{
            return "Rutabagas! That doesn't work."
        }
    },
};

module.exports = launchcode;

