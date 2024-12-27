class bloodborneClass {
    constructor(level, vitality, endurance, strength, skill, bloodtinge, arcane) {
        this.level = level;
        this.vitality = vitality;
        this.endurance = endurance;
        this.strength = strength;
        this.skill = skill;
        this.bloodtinge = bloodtinge;
        this.arcane = arcane;
        this.finalLevel = level;
    }
}

function updateFinalLevel(bbClass) {
    var _vitality = parseInt(document.getElementById("vitality").value, 10);
    var _endurance = parseInt(document.getElementById("endurance").value, 10);
    var _strength = parseInt(document.getElementById("strength").value, 10);
    var _skill = parseInt(document.getElementById("skill").value, 10);
    var _bloodtinge = parseInt(document.getElementById("bloodtinge").value, 10);
    var _arcane = parseInt(document.getElementById("arcane").value, 10);

    if (_vitality > bbClass.vitality) bbClass.finalLevel += (_vitality - bbClass.vitality);
    if (_endurance > bbClass.endurance) bbClass.finalLevel += (_endurance - bbClass.endurance);
    if (_strength > bbClass.strength) bbClass.finalLevel += (_strength - bbClass.strength);
    if (_skill > bbClass.skill) bbClass.finalLevel += (_skill - bbClass.skill);
    if (_bloodtinge > bbClass.bloodtinge) bbClass.finalLevel += (_bloodtinge - bbClass.bloodtinge);
    if (_arcane > bbClass.arcane) bbClass.finalLevel += (_arcane - bbClass.arcane);
}

function resetLevels() {
    milquetoast.finalLevel = milquetoast.level;
    loneSurvivor.finalLevel = loneSurvivor.level;
    troubledChildhood.finalLevel = troubledChildhood.level;
    violentPast.finalLevel = violentPast.level;
    professional.finalLevel = professional.level;
    militaryVeteran.finalLevel = militaryVeteran.level;
    nobleScion.finalLevel = nobleScion.level;
    cruelFate.finalLevel = cruelFate.level;
    wasteofSkin.finalLevel = wasteofSkin.level;
}

function calculateResults() {
    
    resetLevels();
    updateFinalLevel(milquetoast);
    updateFinalLevel(loneSurvivor);
    updateFinalLevel(troubledChildhood);
    updateFinalLevel(violentPast);
    updateFinalLevel(professional);
    updateFinalLevel(militaryVeteran);
    updateFinalLevel(nobleScion);
    updateFinalLevel(cruelFate);
    updateFinalLevel(wasteofSkin);
}

function displayResults() {
    document.querySelector(".milquetoast").textContent = milquetoast.finalLevel;
    document.querySelector(".lone").textContent = loneSurvivor.finalLevel;
    document.querySelector(".troubled").textContent = troubledChildhood.finalLevel;
    document.querySelector(".violent").textContent = violentPast.finalLevel;
    document.querySelector(".professional").textContent = professional.finalLevel;
    document.querySelector(".military").textContent = militaryVeteran.finalLevel;
    document.querySelector(".noble").textContent = nobleScion.finalLevel;
    document.querySelector(".cruel").textContent = cruelFate.finalLevel;
    document.querySelector(".waste").textContent = wasteofSkin.finalLevel;
}

var milquetoast = new bloodborneClass(10, 11, 10, 12, 10, 9, 8);
var loneSurvivor = new bloodborneClass(10, 14, 11, 11, 10, 7, 7);
var troubledChildhood = new bloodborneClass(10, 9, 14, 9, 13, 6, 9);
var violentPast = new bloodborneClass(10, 12, 11, 15, 9, 6, 7);
var professional = new bloodborneClass(10, 9, 12, 9, 15, 7, 8);
var militaryVeteran = new bloodborneClass(10, 10, 10, 14, 13, 7, 6);
var nobleScion = new bloodborneClass(10, 7, 8, 9, 13, 14, 9);
var cruelFate = new bloodborneClass(10, 10, 12, 10, 9, 5, 14);
var wasteofSkin = new bloodborneClass(4, 10, 9, 10, 9, 7, 9);

var button = document.querySelector(".calc");
button.addEventListener("click", () => {
    calculateResults();
    displayResults();
});
