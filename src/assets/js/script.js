"use strict";
async function getCharacterInfo(character) {
    const CHARACTER_PROFILE_URL = `https://raider.io/api/v1/characters/profile?region=${character.region}&realm=${character.realm}&name=${character.name}&fields=gear%2Cmythic_plus_scores_by_season%3Acurrent`;
    const response = await fetch(CHARACTER_PROFILE_URL);
    const data = await response.json();
    console.log(data);
}
getCharacterInfo({ region: "us", realm: "Azralon", name: "Edrawr" });
