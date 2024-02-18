// user setup begins
const ageBirthYear = 1999;
const ageBirthMonth = 9;
const ageBirthDay = 16;
const ageTextElementId = "agehere"; // where to put calculated age text
const ageFlavourText = [" years old"]; // appended to calculated age
const ageFallbackAgeFlavourText = "Born in " + ageBirthYear;
const ageMakeCake = true; // set to false to disable celebration text display
const ageCakeTextClassName = "cakehere"; // where to put celebration text
const ageCakeFlavourText = [" 🎉", " 🎂", " 🍰", " today!"]; // celebration text
const ageFallbackCakeFlavourText = " today!";
// end of user setup

const ageCurrentDate = new Date();
const ageCurrentYear = ageCurrentDate.getFullYear();
const ageCurrentMonth = ageCurrentDate.getMonth();
const ageCurrentDay = ageCurrentDate.getDate();
var ageYearsElapsed = ageCurrentYear - ageBirthYear;
var ageTextElement = document.getElementById(ageTextElementId);
var ageCakeClassElements = document.getElementsByClassName(ageCakeTextClassName);

calcAgeInitialise();

function calcAgeInitialise() {
  var ageInitialiseFail = false;
  if (ageTextElement == null) {
    console.warn("calcAgeInitialise failed - could not locate ageTextElement by id '" + ageTextElementId + "'");
    ageInitialiseFail = true;
  };

  if (ageMakeCake && ageCakeTextClassName != null) {
    var ageCakeInitialiseFail = false;
    if (ageCakeClassElements == null) {
      console.warn("calcAgeInitialise - could not locate ageCakeClassElements by id '" + ageCakeTextClassName + "'");
      ageCakeInitialiseFail = true;
    };
  } else {
    ageCakeInitialiseFail = true;
  };

  if (!ageInitialiseFail) {
    doAgeFill();
  } else {
    console.error("calcAgeInitialise stopped - ageInitialiseFail");
    return
  };

  if (!ageCakeInitialiseFail) {
    makeCake();
  } else {
    console.error("calcAgeInitialise stopped - ageCakeInitialiseFail");
  };
};

function doAgeFill() {
  try {
    if (ageCurrentMonth < ageBirthMonth - 1) {
      ageYearsElapsed--;
    }
    if (ageBirthMonth - 1 == ageCurrentMonth && ageCurrentDay < ageBirthDay) {
      ageYearsElapsed--;
    };
    var ageRandomFlavourText = ageFlavourText[Math.floor(Math.random() * ageFlavourText.length)];
    ageTextElement.innerText = ageYearsElapsed + ageRandomFlavourText;
  } catch (e) {
    console.error("doAgeFill failed - " + e);
    ageTextElement.innerText = ageFallbackAgeFlavourText;
  };
};

function makeCake() {
  try {
    if (ageCurrentMonth == ageBirthMonth - 1 && ageCurrentDay == ageBirthDay) {
      var ageRandomCakeFlavour = ageCakeFlavourText[Math.floor(Math.random() * ageCakeFlavourText.length)];
      for (var i = 0; i < ageCakeClassElements.length; i++) {
        ageCakeClassElements[i].innerText = ageRandomCakeFlavour;
        ageCakeClassElements[i].style.display = "inline";
      };
    };
  } catch (e) {
    console.error("makeCake failed - " + e);
    for (var i = 0; i < ageCakeClassElements.length; i++) {
      ageCakeClassElements[i].innerText = ageFallbackCakeFlavourText;
    };
  };
};
