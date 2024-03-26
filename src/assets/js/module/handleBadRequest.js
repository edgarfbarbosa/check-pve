export default function handleBadRequest() {
    const characterSection = document.getElementById('characterSection');
    characterSection?.classList.remove('block');
    characterSection?.classList.add('hidden');
    alert("Erro 400: Verifique se o nome do personagem e o servidor estão corretos e separados por um hífen (-). Exemplo: NomeDoPersonagem-NomeDoServidor.");
}
