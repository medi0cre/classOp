class erClass {
    constructor(level, vitality, mind, endurance, strength, dexterity, resistance, intelligence, faith) {
        this.level = level;
        this.vitality = vitality;
        this.mind = mind;
        this.endurance = endurance;
        this.strength = strength;
        this.dexterity = dexterity;
        this.intelligence = intelligence;
        this.faith = faith;
        this.resistance = resistance;
        this.finalLevel = level;
    }
}

function updateFinalLevel(erClass) {
    var _vitality = parseInt(document.getElementById("vitality").value, 10);
    var _mind = parseInt(document.getElementById("attunement").value, 10);
    var _endurance = parseInt(document.getElementById("endurance").value, 10);
    var _strength = parseInt(document.getElementById("strength").value, 10);
    var _dexterity = parseInt(document.getElementById("dexterity").value, 10);
    var _intelligence = parseInt(document.getElementById("intelligence").value, 10);
    var _faith = parseInt(document.getElementById("faith").value, 10);
    var _resistance = parseInt(document.getElementById("resistance").value, 10);

    if (_vitality > erClass.vitality) erClass.finalLevel += (_vitality - erClass.vitality);
    if (_mind > erClass.mind) erClass.finalLevel += (_mind - erClass.mind);
    if (_endurance > erClass.endurance) erClass.finalLevel += (_endurance - erClass.endurance);
    if (_strength > erClass.strength) erClass.finalLevel += (_strength - erClass.strength);
    if (_dexterity > erClass.dexterity) erClass.finalLevel += (_dexterity - erClass.dexterity);
    if (_intelligence > erClass.intelligence) erClass.finalLevel += (_intelligence - erClass.intelligence);
    if (_faith > erClass.faith) erClass.finalLevel += (_faith - erClass.faith);
    if (_resistance > erClass.resistance) erClass.finalLevel += (_resistance - erClass.resistance);
}

function resetLevels() {
    warrior.finalLevel = warrior.level;
    knight.finalLevel = knight.level;
    wanderer.finalLevel = wanderer.level;
    thief.finalLevel = thief.level;
    bandit.finalLevel = bandit.level;
    hunter.finalLevel = hunter.level;
    sorcerer.finalLevel = sorcerer.level;
    pyromancer.finalLevel = pyromancer.level;
    cleric.finalLevel = cleric.level;
    deprived.finalLevel = deprived.level;
}

function calculateResults() {
    
    resetLevels();
    updateFinalLevel(warrior);
    updateFinalLevel(knight);
    updateFinalLevel(wanderer);
    updateFinalLevel(thief);
    updateFinalLevel(bandit);
    updateFinalLevel(hunter);
    updateFinalLevel(sorcerer);
    updateFinalLevel(pyromancer);
    updateFinalLevel(cleric);
    updateFinalLevel(deprived);
}

function displayResults() {
    document.querySelector(".warrior").textContent = warrior.finalLevel;
    document.querySelector(".knight").textContent = knight.finalLevel;
    document.querySelector(".wanderer").textContent = wanderer.finalLevel;
    document.querySelector(".thief").textContent = thief.finalLevel;
    document.querySelector(".bandit").textContent = bandit.finalLevel;
    document.querySelector(".hunter").textContent = hunter.finalLevel;
    document.querySelector(".sorcerer").textContent = sorcerer.finalLevel;
    document.querySelector(".pyromancer").textContent = pyromancer.finalLevel;
    document.querySelector(".cleric").textContent = cleric.finalLevel;
    document.querySelector(".deprived").textContent = deprived.finalLevel;
}

var warrior = new erClass(4, 11, 8, 12, 13, 13, 11, 9, 9);
var knight = new erClass(5, 14, 10, 10, 11, 11, 10, 9, 11);
var wanderer = new erClass(3, 10, 11, 10, 10, 14, 12, 11, 8);
var thief = new erClass(5, 9, 11, 9, 9, 15, 10, 12, 11);
var bandit = new erClass(4, 12, 8, 14, 14, 9, 11, 8, 10);
var hunter = new erClass(4, 11, 9, 11, 12, 14, 11, 9, 9);
var sorcerer = new erClass(3, 8, 15, 8, 9, 11, 8, 15, 8);
var pyromancer = new erClass(1, 10, 12, 11, 12, 9, 12, 10, 8);
var cleric = new erClass(2, 11, 11, 9, 12, 8, 11, 8, 14);
var deprived = new erClass(6, 11, 11, 11, 11, 11, 11, 11, 11);

var button = document.querySelector(".calc");
button.addEventListener("click", () => {
    calculateResults();
    displayResults();
});
