import getClassColor from './getClassColor.js';
import getScoreColor from './getScoreColor.js';
import getCharacterFaction from './getCharacterFaction.js';
export default function setCharacterInfo(character) {
    const characterSection = document.getElementById('characterSection');
    const characterPhoto = document.getElementById('characterPhoto');
    const characterName = document.getElementById('characterName');
    const characterRegionAndRealm = document.getElementById('characterRegionAndRealm');
    const characterClassAndSpec = document.getElementById('characterClassAndSpec');
    const characterMythicSeasonScore = document.getElementById('characterMythicSeasonScore');
    const characterItemLevel = document.getElementById('characterItemLevel');
    characterSection?.classList.remove('hidden');
    characterSection?.classList.add('block');
    if (characterName && characterSection && characterClassAndSpec && characterMythicSeasonScore) {
        getCharacterFaction(characterName, character.faction, characterSection);
        getScoreColor(characterMythicSeasonScore, character.mythic_plus_scores_by_season[0].scores.all);
        getClassColor(characterClassAndSpec, character.class);
    }
    if (characterPhoto && characterName && characterRegionAndRealm && characterClassAndSpec && characterMythicSeasonScore && characterItemLevel) {
        characterPhoto.setAttribute('src', character.thumbnail_url);
        characterName.innerText = character.name;
        characterRegionAndRealm.innerText = `(${character.region.toUpperCase()}) ${character.realm}`;
        characterClassAndSpec.innerText = `${character.class} ${character.active_spec_name}`;
        characterMythicSeasonScore.innerText = character.mythic_plus_scores_by_season[0].scores.all.toString();
        characterItemLevel.innerText = `${character.gear.item_level_equipped.toFixed()} ilvl`;
    }
}
