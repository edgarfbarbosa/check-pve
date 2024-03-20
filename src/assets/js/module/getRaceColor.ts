export default function getRaceColor(race: string) {
  switch (race) {
    case 'Human':
    return 'text-alliance'
    break
    case 'Blood Elf':
    return 'text-horde'
    break
    default:
    return 'text-yellow'
    break
  }
}