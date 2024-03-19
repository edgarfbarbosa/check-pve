import getCharacterInfo from './getCharacterInfo.js'

export default function getCharacterData(e: Event) {
  e.preventDefault()
  
  const characterRegion = document.getElementById('characterRegion') as HTMLInputElement
  const characterAndRealm = document.getElementById('characterAndRealm') as HTMLInputElement
  const region = characterRegion?.value
  const characterNameAndRealm = characterAndRealm?.value.trim().toLowerCase().split('-')
  const [name, realm] = characterNameAndRealm
  const character = {region, realm, name}
  
  getCharacterInfo(character)
}