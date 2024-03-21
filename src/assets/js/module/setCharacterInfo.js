import getClassColor from './getClassColor.js';
import getScoreColor from './getScoreColor.js';
export default function setCharacterInfo(character) {
    console.log(character);
    const characterPhoto = document.getElementById('characterPhoto');
    const characterName = document.getElementById('characterName');
    const characterRegionAndRealm = document.getElementById('characterRegionAndRealm');
    const characterClassAndSpec = document.getElementById('characterClassAndSpec');
    const characterMythicSeasonScore = document.getElementById('characterMythicSeasonScore');
    const characterItemLevel = document.getElementById('characterItemLevel');
    characterName?.classList.remove('text-alliance', 'text-horde');
    if (character.faction == 'alliance') {
        characterName?.classList.add('text-alliance');
    }
    else {
        characterName?.classList.add('text-horde');
    }
    if (characterClassAndSpec && characterMythicSeasonScore) {
        getScoreColor(characterMythicSeasonScore, character.mythic_plus_scores_by_season[0].scores.all);
        getClassColor(characterClassAndSpec, character.class);
    }
    characterPhoto?.setAttribute('src', character.thumbnail_url);
    if (characterName && characterRegionAndRealm && characterClassAndSpec && characterMythicSeasonScore && characterItemLevel) {
        characterName.innerText = character.name;
        characterRegionAndRealm.innerText = `(${character.region.toUpperCase()}) ${character.realm}`;
        characterClassAndSpec.innerText = `${character.class} ${character.active_spec_name}`;
        characterMythicSeasonScore.innerText = character.mythic_plus_scores_by_season[0].scores.all.toString();
        characterItemLevel.innerText = `${character.gear.item_level_equipped.toFixed()} ilvl`;
    }
}
