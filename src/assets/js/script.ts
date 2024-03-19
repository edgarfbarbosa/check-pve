import getCharacterData from './module/getCharacterData.js'

const formSearchCharacter = document.getElementById('formSearchCharacter')

formSearchCharacter?.addEventListener('submit', getCharacterData)