import AffixInfo from '../../../interfaces/affixes'

export default function setAffixesInfo(affixes: AffixInfo) {
  const affixNames = affixes.affix_details.map(affix => affix.name)
  const wowheadAffixLinks = affixes.affix_details.map(affix => affix.wowhead_url)
  const affixesSection = document.getElementById('affixesSection')
  const affixAnchors = affixesSection?.querySelectorAll('a')
  
  affixesSection?.classList.remove('hidden')
  affixesSection?.classList.add('block')
  
  affixAnchors?.forEach((anchor, i) => {
    anchor.innerText = affixNames[i]
    anchor.href = wowheadAffixLinks[i]
  })
}