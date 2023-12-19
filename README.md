# calcAge
calcAge is simple script that takes a year, month, and day and determines how many years have passed since that date. The expected use is for calculating ages. I created it for filling in my age on my personal site :)

## Setup
The only configuration required is to set the ID of the HTML element, the year/month/day of birth, the flavour text that appears after the age, and the fallback text to display if the script fails to complete.
```js
const ageElementId = "agehere";
const birthYear = 1999;
const birthMonth = 9;
const birthDay = 16;
const flavourText = [" years old"];
const fallbackAgeText = "Born in " + birthYear;
```
The flavour text is an array, so you can set a list of text to be randomly selected. It also works with just one item, so you don't need to have multiple entries.
The fallback text will completely overwrite the text inside element, so make sure to set this to something that you're happy to display if the calculation or random flavour text fails. Note that if the user doesn't have JavaScript enabled, this text will not set at all. By default, this prints the year only.

## Limitations
- The script has not been tested for uses outside of calculating the age of someone who has already been born. Other use cases may cause problems.
- The script also expects that the age will only show in one location on the page (element, not class).
- The script would need modifying to allow for dynamic pulling of year/month/day since it relies on static declarations.

### License
Copyright 2023 toranine09
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License.
You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
