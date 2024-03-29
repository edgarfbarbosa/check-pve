export default function handleNotFound() {
  const affixesSection = document.getElementById('affixesSection')
  
  affixesSection?.classList.remove('block')
  affixesSection?.classList.add('hidden')
  
  alert("Erro 404: Sua requisição não foi encontrada. Verifique se a URL da API está em funcionamento.")
}