const band1 = document.getElementById("band1");
const band2 = document.getElementById("band2");
const multiplier = document.getElementById("multiplier");
const tolerance = document.getElementById("tolerance");

const preview1 = document.getElementById("preview1");
const preview2 = document.getElementById("preview2");
const preview3 = document.getElementById("preview3");
const preview4 = document.getElementById("preview4");

const result = document.getElementById("result");
const digitValues = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
};

const multiplierValues = {
    black: 1,
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
    green: 100000,
    blue: 1000000,
    violet: 10000000,
    grey: 100000000,
    white: 1000000000,
    gold: 0.1,
    silver: 0.01
};

const toleranceValues = {
    gold: "±5%",
    silver: "±10%",
    none: "±20%"
};
function updatePreview() {
    preview1.style.backgroundColor = band1.value;
    preview2.style.backgroundColor = band2.value;
    preview3.style.backgroundColor = multiplier.value;
    preview4.style.backgroundColor = tolerance.value;
}
function calculateResistance() {

    if (
        !band1.value ||
        !band2.value ||
        !multiplier.value ||
        !tolerance.value
    ) {
        result.textContent = "Please select all bands";
        return;
    }

    let firstDigit = digitValues[band1.value];
    let secondDigit = digitValues[band2.value];

    let multiplierValue = multiplierValues[multiplier.value];
    let toleranceValue = toleranceValues[tolerance.value];

    let resistance =
        ((firstDigit * 10) + secondDigit) * multiplierValue;

    let formattedResistance;

    if (resistance >= 1000000) {
        formattedResistance = (resistance / 1000000) + " MΩ";
    }
    else if (resistance >= 1000) {
        formattedResistance = (resistance / 1000) + " kΩ";
    }
    else {
        formattedResistance = resistance + " Ω";
    }

    result.textContent =
        "Resistance: " +
        formattedResistance +
        " " +
        toleranceValue;
}
band1.addEventListener("change", () => {
    updatePreview();
    calculateResistance();
});

band2.addEventListener("change", () => {
    updatePreview();
    calculateResistance();
});

multiplier.addEventListener("change", () => {
    updatePreview();
    calculateResistance();
});

tolerance.addEventListener("change", () => {
    updatePreview();
    calculateResistance();
});