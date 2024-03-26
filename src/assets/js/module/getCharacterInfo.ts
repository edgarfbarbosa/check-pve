import { CharacterInfo } from '../../../interfaces/character'
import setCharacterInfo from './setCharacterInfo.js'
import handleBadRequest from './handleBadRequest.js'

export default async function getCharacterInfo(character: CharacterInfo) {
  try {
    const CHARACTER_PROFILE_URL = `https://raider.io/api/v1/characters/profile?region=${character.region}&realm=${character.realm}&name=${character.name}&fields=gear%2Cmythic_plus_scores_by_season%3Acurrent`
    const MYTHIC_PLUS_AFFIXES_URL = `https://raider.io/api/v1/mythic-plus/affixes?region=${character.region}&locale=pt`
    
    const response = await Promise.all([
      fetch(CHARACTER_PROFILE_URL, {
        method: 'GET'
      }),
      fetch(MYTHIC_PLUS_AFFIXES_URL, {
        method: 'GET'
      })
    ])
    
    switch(response[0].status) {
      case 200:
      const data = await response[0].json()
      setCharacterInfo(data)
      break
      case 400:
      handleBadRequest()
      break
      default:
      alert(`HTTP response status codes: ${response[0].status} (${response[0].ok})`)
    }
  }
  catch(error) {
    alert(error)
  }
}