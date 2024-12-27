class erClass {
    constructor(level, vigor, mind, endurance, strength, dexterity, intelligence, faith, arcane) {
        this.level = level;
        this.vigor = vigor;
        this.mind = mind;
        this.endurance = endurance;
        this.strength = strength;
        this.dexterity = dexterity;
        this.intelligence = intelligence;
        this.faith = faith;
        this.arcane = arcane;
        this.finalLevel = level;
    }
}

function updateFinalLevel(erClass) {
    var _vigor = parseInt(document.getElementById("vigor").value, 10);
    var _mind = parseInt(document.getElementById("mind").value, 10);
    var _endurance = parseInt(document.getElementById("endurance").value, 10);
    var _strength = parseInt(document.getElementById("strength").value, 10);
    var _dexterity = parseInt(document.getElementById("dexterity").value, 10);
    var _intelligence = parseInt(document.getElementById("intelligence").value, 10);
    var _faith = parseInt(document.getElementById("faith").value, 10);
    var _arcane = parseInt(document.getElementById("arcane").value, 10);

    if (_vigor > erClass.vigor) erClass.finalLevel += (_vigor - erClass.vigor);
    if (_mind > erClass.mind) erClass.finalLevel += (_mind - erClass.mind);
    if (_endurance > erClass.endurance) erClass.finalLevel += (_endurance - erClass.endurance);
    if (_strength > erClass.strength) erClass.finalLevel += (_strength - erClass.strength);
    if (_dexterity > erClass.dexterity) erClass.finalLevel += (_dexterity - erClass.dexterity);
    if (_intelligence > erClass.intelligence) erClass.finalLevel += (_intelligence - erClass.intelligence);
    if (_faith > erClass.faith) erClass.finalLevel += (_faith - erClass.faith);
    if (_arcane > erClass.arcane) erClass.finalLevel += (_arcane - erClass.arcane);
}

function resetLevels() {
    hero.finalLevel = hero.level;
    bandit.finalLevel = bandit.level;
    astrologer.finalLevel = astrologer.level;
    warrior.finalLevel = warrior.level;
    prisoner.finalLevel = prisoner.level;
    confessor.finalLevel = confessor.level;
    wretch.finalLevel = wretch.level;
    vagabond.finalLevel = vagabond.level;
    prophet.finalLevel = prophet.level;
    samurai.finalLevel = samurai.level;
}

function calculateResults() {
    
    resetLevels();
    updateFinalLevel(hero);
    updateFinalLevel(bandit);
    updateFinalLevel(astrologer);
    updateFinalLevel(warrior);
    updateFinalLevel(prisoner);
    updateFinalLevel(confessor);
    updateFinalLevel(wretch);
    updateFinalLevel(vagabond);
    updateFinalLevel(prophet);
    updateFinalLevel(samurai);
}

function displayResults() {
    document.querySelector(".hero").textContent = hero.finalLevel;
    document.querySelector(".bandit").textContent = bandit.finalLevel;
    document.querySelector(".astrologer").textContent = astrologer.finalLevel;
    document.querySelector(".warrior").textContent = warrior.finalLevel;
    document.querySelector(".prisoner").textContent = prisoner.finalLevel;
    document.querySelector(".confessor").textContent = confessor.finalLevel;
    document.querySelector(".wretch").textContent = wretch.finalLevel;
    document.querySelector(".vagabond").textContent = vagabond.finalLevel;
    document.querySelector(".prophet").textContent = prophet.finalLevel;
    document.querySelector(".samurai").textContent = samurai.finalLevel;
}

var hero = new erClass(7, 14, 9, 12, 16, 9, 7, 8, 11);
var bandit = new erClass(5, 10, 11, 10, 9, 13, 9, 8, 14);
var astrologer = new erClass(6, 9, 15, 9, 8, 12, 16, 7, 9);
var warrior = new erClass(8, 11, 12, 11, 10, 16, 10, 8, 9);
var prisoner = new erClass(9, 11, 12, 11, 11, 14, 14, 6, 9);
var confessor = new erClass(10, 10, 13, 10, 12, 12, 9, 14, 9);
var wretch = new erClass(1, 10, 10, 10, 10, 10, 10, 10, 10);
var vagabond = new erClass(9, 15, 10, 11, 14, 13, 9, 9, 7);
var prophet = new erClass(7, 10, 14, 8, 11, 10, 7, 16, 10);
var samurai = new erClass(9, 12, 11, 13, 12, 15, 9, 8, 8);

var button = document.querySelector(".calc");
button.addEventListener("click", () => {
    calculateResults();
    displayResults();
});
