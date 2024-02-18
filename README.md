# calcAge
calcAge is simple script that takes a year, month, and day and determines how many years have passed since that date. The expected use is for calculating ages. It can also display celebration text if the target day & month matches the current day & month.

## Setup
Setup involves configuring the constant variables at the start of the script:
```js
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
```
The variables `ageBirthYear`, `ageBirthMonth`, and `ageBirthDay` are self explanatory - input the year, numerical month, and numerical day for the birthday.
The variables `ageTextElementId` and `ageCakeTextClassName` are where you put the HTML ID for the element where you want the age text (eg "24 years old"), and the HTML class name for the element(s) where you want the celebratory text (eg: " 🎉"), respectively.
Flavour text refers to the appended text that goes with the calculated age (eg: " years old"), or the celebration text itself (eg: " 🎉"). The flavour text is an array, so you can set a list of text to be randomly selected. It also works with just one item, so you don't need to have multiple entries.
The fallback variables `ageFallbackAgeFlavourText` and `ageFallbackCakeFlavourText` are used when some calculation/randomisation error occurs. The fallback text will completely overwrite the text inside element, so make sure to set this to something that you're happy to display if the calculation or random flavour text fails.
Finally, `ageMakeCake` is a boolean to toggle whether celebratory text is used at all. You can also make `ageCakeTextClassName` null to achieve the same effect.

## Limitations
- Not tested for uses outside of calculating years since a past date.
- Expects that the age will only show in one location on the page (element, not class).
- Expects that celebration text may appear in multiple places on the page (class, not element).
- Expects a single, static date (not dynamic).
- Expects the HTML to be formatted with age followed by celebration text, eg: <span id="agehere">...</span><span class="cakehere"> to result in "25 years old 🎉".

## License
Copyright 2023-2024 toranine09
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License.
You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
