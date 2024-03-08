import { CharacterInfo, CharacterData } from '../../interfaces/character'

async function getCharacterInfo(character: CharacterInfo) {
  try {
    const CHARACTER_PROFILE_URL = `https://raider.io/api/v1/characters/profile?region=${character.region}&realm=${character.realm}&name=${character.name}&fields=gear%2Cmythic_plus_scores_by_season%3Acurrent`
    const response = await fetch(CHARACTER_PROFILE_URL)
    const data = await response.json()
    
    setCharacterInfo(data)
  }
  catch(error) {
    console.error(error)
  }
}

function setCharacterInfo(data: CharacterData) {
  console.log(data)
}

const formSearchCharacter = document.getElementById('formSearchCharacter')
const characterRegion = document.getElementById('characterRegion') as HTMLInputElement
const characterAndRealm = document.getElementById('characterAndRealm') as HTMLInputElement

function getCharacterData(e: Event) {
  e.preventDefault()
  
  const region = characterRegion?.value
  const characterNameAndRealm = characterAndRealm?.value.trim().toLowerCase().split('-')
  const [name, realm] = characterNameAndRealm
  const character = {region, realm, name}
  
  getCharacterInfo(character)
}

formSearchCharacter?.addEventListener('submit', getCharacterData)