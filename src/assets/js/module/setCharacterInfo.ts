import { CharacterData } from '../../../interfaces/character'
import getClassColor from './getClassColor.js'

export default function setCharacterInfo(character: CharacterData) {
  console.log(character)
  
  const characterPhoto = document.getElementById('characterPhoto')
  const characterName = document.getElementById('characterName')
  const characterRegionAndRealm = document.getElementById('characterRegionAndRealm')
  const characterClassAndSpec = document.getElementById('characterClassAndSpec')
  const characterMythicSeasonScore = document.getElementById('characterMythicSeasonScore')
  const characterItemLevel = document.getElementById('characterItemLevel')
  const colorOfClassesToRemove = ['text-yellow',
  'text-death-knight',
  'text-demon-hunter',
  'text-druid',
  'text-evoker',
  'text-hunter',
  'text-mage',
  'text-monk',
  'text-paladin',
  'text-priest',
  'text-rogue',
  'text-shaman',
  'text-warlock',
  'text-warrior']
  
  characterName?.classList.remove('text-alliance', 'text-horde')
  characterClassAndSpec?.classList.remove(...colorOfClassesToRemove)
  
  if (character.faction == 'alliance') {
    characterName?.classList.add('text-alliance')
  } else {
    characterName?.classList.add('text-horde')
  }
  
  characterClassAndSpec?.classList.add(getClassColor(character.class))
  
  characterPhoto?.setAttribute('src', character.thumbnail_url)
  if (characterName && characterRegionAndRealm && characterClassAndSpec && characterMythicSeasonScore && characterItemLevel) {
    characterName.innerText = character.name
    characterRegionAndRealm.innerText = `(${character.region.toUpperCase()}) ${character.realm}`
    characterClassAndSpec.innerText = `${character.class} ${character.active_spec_name}`
    characterMythicSeasonScore.innerText = character.mythic_plus_scores_by_season[0].scores.all.toString()
    characterItemLevel.innerText = `${character.gear.item_level_equipped.toFixed()} ilvl`
  }
}