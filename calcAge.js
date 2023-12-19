const ageElementId = "agehere";
const birthYear = 1999;
const birthMonth = 9;
const birthDay = 16;
const flavourText = [" years old"];
const fallbackAgeText = "Born in " + birthYear;

var ageElement = document.getElementById(ageElementId);
if (ageElement) {
  try {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    var calculatedNumericalAge = currentYear - birthYear;
    if (currentMonth < birthMonth - 1) {
      calculatedNumericalAge--;
    }
    if (birthMonth - 1 == currentMonth && currentDay < birthDay) {
      calculatedNumericalAge--;
    };
    var randomFlavour = flavourText[Math.floor(Math.random() * flavourText.length)];
    ageElement.innerText = calculatedNumericalAge + randomFlavour;
  } catch (e) {
    console.error("calcAge failed - " + e);
    ageElement.innerText = fallbackAgeText;
  };
} else {
  console.error("calcAge failed - no element to insert age");
};
