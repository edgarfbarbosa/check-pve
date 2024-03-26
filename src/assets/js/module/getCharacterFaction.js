export default function getCharacterFaction(name, faction, section) {
    name.classList.remove('text-alliance', 'text-horde');
    section.classList.remove('bg-alliance-banner', 'bg-horde-banner', 'bg-200');
    if (faction == 'alliance') {
        name.classList.add('text-alliance');
        section.classList.add('bg-alliance-banner', 'bg-200');
    }
    else {
        name.classList.add('text-horde');
        section.classList.add('bg-horde-banner', 'bg-200');
    }
}
