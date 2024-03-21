export default function getClassColor(element, characterClass) {
    element.classList.remove('text-yellow', 'text-death-knight', 'text-demon-hunter', 'text-druid', 'text-evoker', 'text-hunter', 'text-mage', 'text-monk', 'text-paladin', 'text-priest', 'text-rogue', 'text-shaman', 'text-warlock', 'text-warrior');
    switch (characterClass) {
        case 'Death Knight':
            element.classList.add('text-death-knight');
            break;
        case 'Demon Hunter':
            element.classList.add('text-demon-hunter');
            break;
        case 'Druid':
            element.classList.add('text-druid');
            break;
        case 'Evoker':
            element.classList.add('text-evoker');
            break;
        case 'Hunter':
            element.classList.add('text-hunter');
            break;
        case 'Mage':
            element.classList.add('text-mage');
            break;
        case 'Monk':
            element.classList.add('text-monk');
            break;
        case 'Paladin':
            element.classList.add('text-paladin');
            break;
        case 'Priest':
            element.classList.add('text-priest');
            break;
        case 'Rogue':
            element.classList.add('text-rogue');
            break;
        case 'Shaman':
            element.classList.add('text-shaman');
            break;
        case 'Warlock':
            element.classList.add('text-warlock');
            break;
        case 'Warrior':
            element.classList.add('text-warrior');
            break;
        default:
            element.classList.add('text-yellow');
            break;
    }
}
