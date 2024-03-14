import { CharacterInfo, CharacterData } from '../../interfaces/character'

async function getCharacterInfo(character: CharacterInfo) {
  try {
    const CHARACTER_PROFILE_URL = `https://raider.io/api/v1/characters/profile?region=${character.region}&realm=${character.realm}&name=${character.name}&fields=gear%2Cmythic_plus_scores_by_season%3Acurrent`
    const response = await fetch(CHARACTER_PROFILE_URL)
    
    switch(response.status) {
      case 200:
      const data = await response.json()
      setCharacterInfo(data)
      break
      case 400:
      console.error("No matches found. Please check your filters.")
      break
      default:
      console.error(`${response.ok}: ${response.status}`)
    }
  }
  catch(error) {
    console.error(error)
  }
}

function setCharacterInfo(character: CharacterData) {
  console.log(character)
  
  const characterPhoto = document.getElementById('characterPhoto')
  const characterName = document.getElementById('characterName')
  const characterRegionAndRealm = document.getElementById('characterRegionAndRealm')
  const characterClassAndSpec = document.getElementById('characterClassAndSpec')
  const characterMythicSeasonScore = document.getElementById('characterMythicSeasonScore')
  
  characterPhoto?.setAttribute('src', character.thumbnail_url)
  if (characterName && characterRegionAndRealm && characterClassAndSpec && characterMythicSeasonScore) {
    characterName.innerText = character.name
    characterRegionAndRealm.innerText = `(${character.region.toUpperCase()}) ${character.realm}`
    characterClassAndSpec.innerText = `${character.race} ${character.class} ${character.active_spec_name}`
    characterMythicSeasonScore.innerText = `${character.mythic_plus_scores_by_season[0].scores.all}`
  }
}

const formSearchCharacter = document.getElementById('formSearchCharacter')

function getCharacterData(e: Event) {
  e.preventDefault()
  
  const characterRegion = document.getElementById('characterRegion') as HTMLInputElement
  const characterAndRealm = document.getElementById('characterAndRealm') as HTMLInputElement
  const region = characterRegion?.value
  const characterNameAndRealm = characterAndRealm?.value.trim().toLowerCase().split('-')
  const [name, realm] = characterNameAndRealm
  const character = {region, realm, name}
  
  getCharacterInfo(character)
}

formSearchCharacter?.addEventListener('submit', getCharacterData)