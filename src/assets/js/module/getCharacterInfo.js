import setCharacterInfo from './setCharacterInfo.js';
import handleBadRequest from './handleBadRequest.js';
import setAffixesInfo from './setAffixesInfo.js';
export default async function getCharacterInfo(character) {
    try {
        const CHARACTER_PROFILE_URL = `https://raider.io/api/v1/characters/profile?region=${character.region}&realm=${character.realm}&name=${character.name}&fields=gear%2Cmythic_plus_scores_by_season%3Acurrent`;
        const MYTHIC_PLUS_AFFIXES_URL = `https://raider.io/api/v1/mythic-plus/affixes?region=${character.region}&locale=en`;
        const response = await Promise.all([
            fetch(CHARACTER_PROFILE_URL, {
                method: 'GET'
            }),
            fetch(MYTHIC_PLUS_AFFIXES_URL, {
                method: 'GET'
            })
        ]);
        const [characterProfileResponse, mythicPlusAffixesResponse] = response;
        switch (characterProfileResponse.status) {
            case 200:
                const characterData = await characterProfileResponse.json();
                setCharacterInfo(characterData);
                break;
            case 400:
                handleBadRequest();
                break;
            default:
                alert(`HTTP response status codes: ${characterProfileResponse.status} (${characterProfileResponse.ok})`);
        }
        switch (mythicPlusAffixesResponse.status) {
            case 200:
                const affixesData = await mythicPlusAffixesResponse.json();
                setAffixesInfo(affixesData);
                break;
        }
    }
    catch (error) {
        alert(error);
    }
}
