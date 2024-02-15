//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
    addScore(newScore){
        this.scores.push(newScore);
    }
    average(){
        let average = 0;
        average = Math.round( ( (this.scores.reduce( (acc, val) => acc + val, 0))/this.scores.length ) * 10 ) / 10;;
        return average;
    }
    status(){
        let candidateAvg = this.average();
        if(candidateAvg >= 90){
            return `${this.name} earned an average test score of ${this.average()}% and has a status of Accepted`;
        } else if(candidateAvg > 80 && candidateAvg <= 89){
            return `${this.name} earned an average test score of ${this.average()}% and has a status of Reserve.`;
        } else if(candidateAvg > 70 && candidateAvg <= 79){
            return `${this.name} earned an average test score of ${this.average()}% and has a status of Probationary.`;
        } else{
            return `${this.name} earned an average test score of ${this.average()}% and has a status of Rejected.`;
        }
    }
    reachReserve(){
        let count = 0;
        while(this.average() <= 80){
            this.addScore(100);
            count++;
        }
        return `It takes ${count} tests for ${this.name} to reach Reserve`;
    }
    reachAccepted(){
        let count = 0;
        while(this.average() < 90){
            this.addScore(100);
            count++;
        }
        return `It takes ${count} test for ${this.name} to reach Accepted`;
    }
}

let crewCand1 = new CrewCandidate('Bubba Bear', 135, [80,85,90]);
let crewCand2 = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let crewCand3 = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(crewCand1, crewCand2, crewCand3);
crewCand1.addScore(83);
console.log(crewCand1.scores);
console.log('Glad Glator Average: ',crewCand3.average());


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
console.log(crewCand3.reachReserve());
console.log(crewCand3.reachAccepted());