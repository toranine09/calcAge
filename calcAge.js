const ageElementId = "agehere";
const cakeElementId = "cakehere";
const birthYear = 1999;
const birthMonth = 9;
const birthDay = 16;
const ageFlavourText = [" years old"];
const cakeFlavourText = [" 🎉", " 🎂", " 🍰", " today!"];
const fallbackAgeText = "Born in " + birthYear;
const fallbackCakeText = " today!";

var ageElement = document.getElementById(ageElementId);
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();
var calculatedNumericalAge = currentYear - birthYear;

if (ageElement) {
  try {
    if (currentMonth < birthMonth - 1) {
      calculatedNumericalAge--;
    }
    if (birthMonth - 1 == currentMonth && currentDay < birthDay) {
      calculatedNumericalAge--;
    };
    var randomAgeFlavour = ageFlavourText[Math.floor(Math.random() * ageFlavourText.length)];
    ageElement.innerText = calculatedNumericalAge + randomAgeFlavour;
  } catch (e) {
    console.error("calcAge failed - " + e);
    ageElement.innerText = fallbackAgeText;
  };
} else {
  console.error("calcAge failed - no element to insert age");
};

var cakeElement = document.getElementById(cakeElementId);
if (cakeElement) {
  try {
    if (currentMonth == birthMonth - 1 && currentDay == birthDay) {
      var randomCakeFlavour = cakeFlavourText[Math.floor(Math.random() * cakeFlavourText.length)];
      cakeElement.innerText = randomCakeFlavour;
      cakeElement.style.display = "inline";
    };
  } catch (e) {
    console.error("makeCake failed - " + e);
    cakeElement.innerText = fallbackCakeText;
  };
} else {
  console.error("makeCake failed - no element to insert cake");
};
