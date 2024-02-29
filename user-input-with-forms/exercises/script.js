//Code Your Solution Below
window.addEventListener("load", () =>{
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let testNameInput = document.querySelector("input[name=testName]");
        let testDateInput = document.querySelector("input[name=testDate]");
        let rocketTypeSelect = document.querySelector("select[name=rocketType]");
        let boosterCountInput = document.querySelector("input[name=boosterCount]");
        let windRatingInput = document.querySelector("input[name=windRating]");
        let productionServersCheckbox = document.querySelector("input[name=productionServers]");
        if(boosterCountInput.value >= 10 || boosterCountInput.value < 0){
            event.preventDefault();
            alert("booster count should be a positive number less than 10");
        }
        if(testNameInput.value === "" || testDateInput.value === "" || rocketTypeSelect.value === "" || boosterCountInput.value === "" || windRatingInput.value === ""|| productionServersCheckbox.checked === false){
            event.preventDefault();
            alert("All fields are required");
        }
    });
})