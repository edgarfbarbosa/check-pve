export default function getClassColor(characterClass: string): string {
  switch (characterClass) {
    case 'Death Knight':
    return 'text-death-knight'
    case 'Demon Hunter':
    return 'text-demon-hunter'
    case 'Druid':
    return 'text-druid'
    case 'Evoker':
    return 'text-evoker'
    case 'Hunter':
    return 'text-hunter'
    case 'Mage':
    return 'text-mage'
    case 'Monk':
    return 'text-monk'
    case 'Paladin':
    return 'text-paladin'
    case 'Priest':
    return 'text-priest'
    case 'Rogue':
    return 'text-rogue'
    case 'Shaman':
    return 'text-shaman'
    case 'Warlock':
    return 'text-warlock'
    case 'Warrior':
    return 'text-warrior'
    default:
    return 'text-yellow'
  }
}