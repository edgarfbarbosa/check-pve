interface CharacterInfo {
  region: string;
  realm: string;
  name: string;
}

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

interface CharacterData {
  name: string;
  race: string;
  class: string;
  active_spec_name: string;
  faction: string;
  thumbnail_url: string;
  region: string;
  realm: string;
  mythic_plus_scores_by_season: Array<{
    scores: {
      all: number
    }
  }>
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
  
  const characterInfo = {
    region: region,
    name: characterNameAndRealm[0],
    realm: characterNameAndRealm[1]
  }
  
  getCharacterInfo(characterInfo)
}

formSearchCharacter?.addEventListener('submit', getCharacterData)