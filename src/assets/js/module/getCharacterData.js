import getCharacterInfo from './getCharacterInfo.js';
export default function getCharacterData(e) {
    e.preventDefault();
    const characterRegion = document.getElementById('characterRegion');
    const characterAndRealm = document.getElementById('characterAndRealm');
    const region = characterRegion?.value;
    const characterNameAndRealm = characterAndRealm?.value.trim().toLowerCase().split('-');
    const [name, realm] = characterNameAndRealm;
    const character = { region, realm, name };
    getCharacterInfo(character);
}
