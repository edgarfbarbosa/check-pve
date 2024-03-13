async function getCharacterInfo(character) {
    try {
        const CHARACTER_PROFILE_URL = `https://raider.io/api/v1/characters/profile?region=${character.region}&realm=${character.realm}&name=${character.name}&fields=gear%2Cmythic_plus_scores_by_season%3Acurrent`;
        const response = await fetch(CHARACTER_PROFILE_URL);
        switch (response.status) {
            case 200:
                const data = await response.json();
                setCharacterInfo(data);
                break;
            case 400:
                console.error("No matches found. Please check your filters.");
                break;
            default:
                console.error(`${response.ok}: ${response.status}`);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function setCharacterInfo(data) {
    const characterPhoto = document.getElementById('characterPhoto');
    const characterName = document.getElementById('characterName');
    console.log(data);
    characterPhoto?.setAttribute('src', data.thumbnail_url);
    if (characterName)
        characterName.innerText = data.name;
}
const formSearchCharacter = document.getElementById('formSearchCharacter');
const characterRegion = document.getElementById('characterRegion');
const characterAndRealm = document.getElementById('characterAndRealm');
function getCharacterData(e) {
    e.preventDefault();
    const region = characterRegion?.value;
    const characterNameAndRealm = characterAndRealm?.value.trim().toLowerCase().split('-');
    const [name, realm] = characterNameAndRealm;
    const character = { region, realm, name };
    getCharacterInfo(character);
}
formSearchCharacter?.addEventListener('submit', getCharacterData);
export {};
