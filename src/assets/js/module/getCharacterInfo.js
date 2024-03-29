import setCharacterInfo from './setCharacterInfo.js';
import handleBadRequest from './handleBadRequest.js';
import setAffixesInfo from './setAffixesInfo.js';
import handleNotFound from './handleNotFound.js';
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
                alert(`Erro ao buscar o perfil do personagem. Código de status HTTP: ${characterProfileResponse.status}`);
        }
        switch (mythicPlusAffixesResponse.status) {
            case 200:
                const affixesData = await mythicPlusAffixesResponse.json();
                setAffixesInfo(affixesData);
                break;
            case 404:
                handleNotFound();
                break;
            default:
                alert(`Erro ao buscar os afixos da semana. Código de status HTTP: ${mythicPlusAffixesResponse.status}`);
        }
    }
    catch (error) {
        alert(`Desculpe, houve um problema ao buscar as informações do personagem. ${error}.`);
        console.error(error);
    }
}
