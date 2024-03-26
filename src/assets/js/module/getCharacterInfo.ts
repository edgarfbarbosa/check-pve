import { CharacterInfo } from '../../../interfaces/character'
import setCharacterInfo from './setCharacterInfo.js'
import handleBadRequest from './handleBadRequest.js'

export default async function getCharacterInfo(character: CharacterInfo) {
  try {
    const CHARACTER_PROFILE_URL = `https://raider.io/api/v1/characters/profile?region=${character.region}&realm=${character.realm}&name=${character.name}&fields=gear%2Cmythic_plus_scores_by_season%3Acurrent`
    const response = await fetch(CHARACTER_PROFILE_URL)
    
    switch(response.status) {
      case 200:
      const data = await response.json()
      setCharacterInfo(data)
      break
      case 400:
      handleBadRequest()
      break
      default:
      alert(`HTTP response status codes: ${response.status} (${response.ok})`)
    }
  }
  catch(error) {
    alert(error)
  }
}