function containerPrincipal() {
    document.getElementById('cadastroObreiro').style.display = "none"
    document.getElementById('containerPrincipal').style.display = "flex"
     document.getElementById('cadObreiro').style.display = "none"
}
function cadastroObreiro() {
    document.getElementById('cadastroObreiro').style.display = "flex"
    document.getElementById('containerPrincipal').style.display = "none"
    document.getElementById('cadObreiro').style.display = "none"
}
function cadObreiro() {
    document.getElementById('cadObreiro').style.display = "flex"
    document.getElementById('containerPrincipal').style.display = "none"
    document.getElementById('cadastroObreiro').style.display = "none"
}

function veneravel() {
    esconderTodas()
    document.getElementById('v').style.display = 'flex'
}
function primeiroVigilante() {
    esconderTodas()
    document.getElementById('pv').style.display = 'flex'
}
function segundoVigilante() {
    esconderTodas()
    document.getElementById('sv').style.display = 'flex'
}
function orador() {
    esconderTodas()
    document.getElementById('or').style.display = 'flex'
}
function secretario() {
    esconderTodas()
    document.getElementById('se').style.display = 'flex'
}
function mestreHarmonia() {
    esconderTodas()
    document.getElementById('mh').style.display = 'flex'
}
function hospitaleiro() {
    esconderTodas()
    document.getElementById('ho').style.display = 'flex'
}
function banquete() {
    esconderTodas()
    document.getElementById('mb').style.display = 'flex'
}
function companheiro() {
    esconderTodas()
    document.getElementById('co').style.display = 'flex'
}
function bandeira() {
    esconderTodas()
    document.getElementById('pb').style.display = 'flex'
}
function estandarte() {
    esconderTodas()
    document.getElementById('es').style.display = 'flex'
}
function espada() {
    esconderTodas()
    document.getElementById('pe').style.display = 'flex'
}
function guarda() {
    esconderTodas()
    document.getElementById('gt').style.display = 'flex'
}
function cobridor() {
    esconderTodas()
    document.getElementById('ce').style.display = 'flex'
}
function cadastroObreiro() {
    esconderTodas()
    document.getElementById('te').style.display = 'flex'
}
function tesoureiro() {
    esconderTodas()
    document.getElementById('botao_cadastro').style.display = 'flex'
}
function esconderTodas() {
    document.getElementById('te').style.display = 'none'
    document.getElementById('v').style.display = 'none'
    document.getElementById('pv').style.display = 'none'
    document.getElementById('sv').style.display = 'none'
    document.getElementById('or').style.display = 'none'
    document.getElementById('se').style.display = 'none'
    document.getElementById('mh').style.display = 'none'
    document.getElementById('ho').style.display = 'none'
    document.getElementById('mb').style.display = 'none'
    document.getElementById('co').style.display = 'none'
    document.getElementById('pb').style.display = 'none'
    document.getElementById('es').style.display = 'none'
    document.getElementById('pe').style.display = 'none'
    document.getElementById('gt').style.display = 'none'
    document.getElementById('ce').style.display = 'none'
    document.getElementById('botao_cadastro').style.display = 'none'
}