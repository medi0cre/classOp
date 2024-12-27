class erClass {
    constructor(level, vitality, intelligence, endurance, strength, dexterity, magic, faith, luck) {
        this.level = level;
        this.vitality = vitality;
        this.intelligence = intelligence;
        this.endurance = endurance;
        this.strength = strength;
        this.dexterity = dexterity;
        this.magic = magic;
        this.faith = faith;
        this.luck = luck;
        this.finalLevel = level;
    }
}

function updateFinalLevel(erClass) {
    var _vitality = parseInt(document.getElementById("vitality").value, 10);
    var _intelligence = parseInt(document.getElementById("intelligence").value, 10);
    var _endurance = parseInt(document.getElementById("endurance").value, 10);
    var _strength = parseInt(document.getElementById("strength").value, 10);
    var _dexterity = parseInt(document.getElementById("dexterity").value, 10);
    var _magic = parseInt(document.getElementById("magic").value, 10);
    var _faith = parseInt(document.getElementById("faith").value, 10);
    var _luck = parseInt(document.getElementById("luck").value, 10);

    if (_vitality > erClass.vitality) erClass.finalLevel += (_vitality - erClass.vitality);
    if (_intelligence > erClass.intelligence) erClass.finalLevel += (_intelligence - erClass.intelligence);
    if (_endurance > erClass.endurance) erClass.finalLevel += (_endurance - erClass.endurance);
    if (_strength > erClass.strength) erClass.finalLevel += (_strength - erClass.strength);
    if (_dexterity > erClass.dexterity) erClass.finalLevel += (_dexterity - erClass.dexterity);
    if (_magic > erClass.magic) erClass.finalLevel += (_magic - erClass.magic);
    if (_faith > erClass.faith) erClass.finalLevel += (_faith - erClass.faith);
    if (_luck > erClass.luck) erClass.finalLevel += (_luck - erClass.luck);
}

function resetLevels() {
    barbarian.finalLevel = barbarian.level;
    soldier.finalLevel = soldier.level;
    knight.finalLevel = knight.level;
    temple.finalLevel = temple.level;
    priest.finalLevel = priest.level;
    wanderer.finalLevel = wanderer.level;
    thief.finalLevel = thief.level;
    hunter.finalLevel = hunter.level;
    magician.finalLevel = magician.level;
    royalty.finalLevel = royalty.level;
}

function calculateResults() {
    
    resetLevels();
    updateFinalLevel(barbarian);
    updateFinalLevel(soldier);
    updateFinalLevel(knight);
    updateFinalLevel(temple);
    updateFinalLevel(priest);
    updateFinalLevel(wanderer);
    updateFinalLevel(thief);
    updateFinalLevel(hunter);
    updateFinalLevel(magician);
    updateFinalLevel(royalty);
}

function displayResults() {
    document.querySelector(".barbarian").textContent = barbarian.finalLevel;
    document.querySelector(".soldier").textContent = soldier.finalLevel;
    document.querySelector(".knight").textContent = knight.finalLevel;
    document.querySelector(".temple").textContent = temple.finalLevel;
    document.querySelector(".priest").textContent = priest.finalLevel;
    document.querySelector(".wanderer").textContent = wanderer.finalLevel;
    document.querySelector(".thief").textContent = thief.finalLevel;
    document.querySelector(".hunter").textContent = hunter.finalLevel;
    document.querySelector(".magician").textContent = magician.finalLevel;
    document.querySelector(".royalty").textContent = royalty.finalLevel;
}

var barbarian = new erClass(9, 15, 7, 13, 15, 9, 11, 8, 11);
var soldier = new erClass(6, 14, 9, 12, 12, 11, 8, 10, 10);
var knight = new erClass(4, 10, 11, 11, 14, 10, 10, 11, 7);
var temple = new erClass(4, 11, 8, 13, 14, 12, 6, 13, 7);
var priest = new erClass(6, 13, 11, 12, 13, 8, 8, 13, 8);
var wanderer = new erClass(6, 10, 10, 11, 11, 15, 9, 7, 13);
var thief = new erClass(9, 10, 13, 10, 9, 14, 10, 8, 15);
var hunter = new erClass(6, 12, 10, 13, 11, 12, 8, 8, 12);
var magician = new erClass(6, 9, 15, 10, 9, 11, 15, 6, 11);
var royalty = new erClass(1, 8, 12, 8, 9, 12, 13, 12, 7);

var button = document.querySelector(".calc");
button.addEventListener("click", () => {
    calculateResults();
    displayResults();
});
