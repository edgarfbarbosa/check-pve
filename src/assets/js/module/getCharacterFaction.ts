export default function getCharacterFaction(name: HTMLElement, faction: string, characterBanner: HTMLElement) {
  name.classList.remove('text-alliance', 'text-horde')
  characterBanner.classList.remove('bg-alliance-banner', 'bg-horde-banner', 'bg-200')
  
  if (faction == 'alliance') {
    name.classList.add('text-alliance')
    characterBanner.classList.add('bg-alliance-banner', 'bg-200')
  } else {
    name.classList.add('text-horde')
    characterBanner.classList.add('bg-horde-banner', 'bg-200')
  }
}