// Feramenta para ocultar e mostrar a tela de login e cadastro //
function clickregister() {
    document.getElementById('mainloginid').style.display='none'
    document.getElementById('mainlogin2').style.display='inline-block'
}
function buttonbacklogin() {
    document.getElementById('mainloginid').style.display='inline-block'
    document.getElementById('mainlogin2').style.display='none'
}

function inputfocado() {
    document.getElementById('inputsolo').style.display= 'none'
    console.loc('evento ativado')
}
function inputdesfocado() {
    document.getElementById('inputsolo').style.display= 'flex'
    console.loc('evento desativado')
}

// Ferramenta de click no menu lateral esquerdo //
let a = 2;
function clickmenu() {
    if (a % 2 === 0) {
        document.getElementById('menuid').style.display='flex'
        a++;
        console.log(a, 'display exibido')
    }
    else {
        document.getElementById('menuid').style.display='none'
        a++;
        console.log(a , 'display oculto')
    }
}
function menudesfocus(){
    document.getElementById('menuid').style.display='none'
    a++;
    console.log(a, 'perdeu o foco, display oculto')
    if (a % 2 === 0){
    }
    else{
        a++;
    }
}


//  //
