"use strict";
async function getCharacterInfo(character) {
    try {
        const CHARACTER_PROFILE_URL = `https://raider.io/api/v1/characters/profile?region=${character.region}&realm=${character.realm}&name=${character.name}&fields=gear%2Cmythic_plus_scores_by_season%3Acurrent`;
        const response = await fetch(CHARACTER_PROFILE_URL);
        const data = await response.json();
        setCharacterInfo(data);
    }
    catch (error) {
        console.error(error);
    }
}
getCharacterInfo({ region: "us", realm: "Azralon", name: "Eddh" });
function setCharacterInfo(data) {
    console.log(data.mythic_plus_scores_by_season[0]?.scores?.all);
}
