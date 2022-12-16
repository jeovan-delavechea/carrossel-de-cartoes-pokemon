const cartoes = document.querySelectorAll('.cartao');
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let cartaoAtual = 0;

function esconderCartoes() {cartoes.forEach(cartao =>{
    cartao.classList.remove('selecionado')})}
function mostrarCartoes() {cartoes[cartaoAtual].classList.add('selecionado')}

setaAvancar.addEventListener('click', function(){
    const totalDeCartoes = cartoes.length - 1;
    if(cartaoAtual === totalDeCartoes) {return;}
    esconderCartoes()
    cartaoAtual++
    mostrarCartoes()
})

setaVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0) return;
    esconderCartoes()
    cartaoAtual--
    mostrarCartoes()
})