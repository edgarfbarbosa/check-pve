import AffixInfo from '../../../interfaces/affixes'

export default function setAffixesInfo(affixes: AffixInfo) {
  console.log(affixes.affix_details[0].description)
  console.log(affixes.affix_details[1].icon)
}