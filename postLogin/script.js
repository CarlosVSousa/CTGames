const usuario1 = JSON.parse(sessionStorage.getItem('webcache'));

var nome = document.getElementById('user')
    nome.innerHTML = 'Bem vindo, ' + usuario1.User;

var avatar = document.querySelector('.avatar')

avatar.src = usuario1.Avatar

// avatar.onload = () => {
//     URL.revokeObjectURL(avatar.src)
// }
    

function gerenciar(){
    location.href = '/postLogin/gerenciar.html';
    
}


function sair(){
    sessionStorage.removeItem('webcache');
    location.href = '/mainPage/mainPage.html';

}

function infoval(){
    const modal = document.querySelector('.alterarinfoval')
    modal.showModal()
    var nickval = document.getElementById('nickval')
    nickval.value = usuario1.Valorant.nick
    var select = document.getElementById('rankval')

    select.value = usuario1.Valorant.rank

}

function valAlterar(){
    const usuario = JSON.parse(sessionStorage.getItem('webcache'));

    let nick = document.getElementById('nickval').value
    var select = document.getElementById('rankval')
    var rank = select.value

    console.log(nick)
    console.log(rank)

    if (nick == '' || rank == ''){
        alert('Preencha todos os campos')
        return;
    }
    
    usuario.Valorant.nick = nick;
    usuario.Valorant.rank = rank;
    localStorage.setItem(usuario.User, JSON.stringify(usuario))
    sessionStorage.setItem('webcache', JSON.stringify(usuario))
    location.reload()
}

function valDeletar(){
    const usuario = JSON.parse(sessionStorage.getItem('webcache'));
    usuario.Valorant.nick = ''
    usuario.Valorant.rank = ''
    localStorage.setItem(usuario.User, JSON.stringify(usuario))
    sessionStorage.setItem('webcache', JSON.stringify(usuario))
    location.reload()
}


function infolol(){
    const modal = document.querySelector('.alterarinfolol')
    modal.showModal()
    var nicklol = document.getElementById('nicklol')
    nicklol.value = usuario1.Lol.nick
    var select = document.getElementById('ranklol')

    select.value = usuario1.Lol.rank

}

function lolAlterar(){
    const usuario = JSON.parse(sessionStorage.getItem('webcache'));

    let nick = document.getElementById('nicklol').value
    var select = document.getElementById('ranklol')
    var rank = select.value

    if (nick == '' || rank == ''){
        alert('Preencha todos os campos')
        return;
    }

    usuario.Lol.nick = nick;
    usuario.Lol.rank = rank;
    localStorage.setItem(usuario.User, JSON.stringify(usuario))
    sessionStorage.setItem('webcache', JSON.stringify(usuario))
    location.reload()
   
}

function lolDeletar(){
    const usuario = JSON.parse(sessionStorage.getItem('webcache'));
    usuario.Lol.nick = ''
    usuario.Lol.rank = ''
    localStorage.setItem(usuario.User, JSON.stringify(usuario))
    sessionStorage.setItem('webcache', JSON.stringify(usuario))
    location.reload()
}

function infocsgo(){
    const modal = document.querySelector('.alterarinfocsgo')
    modal.showModal()
    var nickcsgo = document.getElementById('nickcsgo')
    nickcsgo.value = usuario1.Cs.nick
    var select = document.getElementById('rankcsgo')

    select.value = usuario1.Cs.rank

}

function csgoAlterar(){
    const usuario = JSON.parse(sessionStorage.getItem('webcache'));

    let nick = document.getElementById('nickcsgo').value
    var select = document.getElementById('rankcsgo')
    var rank = select.value

    if (nick == '' && rank == ''){
        alert('Preencha todos os campos')
        return;
    }

    usuario.Cs.nick = nick;
    usuario.Cs.rank = rank;
    localStorage.setItem(usuario.User, JSON.stringify(usuario))
    sessionStorage.setItem('webcache', JSON.stringify(usuario))
    location.reload()
    
}

function csgoDeletar(){
    const usuario = JSON.parse(sessionStorage.getItem('webcache'));
    usuario.Cs.nick = ''
    usuario.Cs.rank = ''
    localStorage.setItem(usuario.User, JSON.stringify(usuario))
    sessionStorage.setItem('webcache', JSON.stringify(usuario))
    location.reload()
}

function valorant(){
    const modal = document.querySelector('.dialogval')
    modal.showModal()
 
}

function lol(){
    const modal = document.querySelector('.dialoglol')
    modal.showModal()
 
}

function csgo(){
    const modal = document.querySelector('.dialogcsgo')
    modal.showModal()
 
}

function valSalvar(){
    const usuario = JSON.parse(sessionStorage.getItem('webcache'));

    var nick = document.querySelector('.valorantnick').value
    var rank = document.querySelector('.valorantrank').value
    
    console.log(nick)
    console.log(rank)

    if (nick == '' || rank == ''){
        alert('Digite seu nick e o rank')
        return;
    }

    usuario.Valorant.nick = nick;
    usuario.Valorant.rank = rank;
    localStorage.setItem(usuario.User, JSON.stringify(usuario))
    sessionStorage.setItem('webcache', JSON.stringify(usuario))
    location.reload()

}

function lolSalvar() {
    const usuario = JSON.parse(sessionStorage.getItem('webcache'));

    var nick = document.querySelector('.lolnick').value
    var rank = document.querySelector('.lolrank').value
    
    if (nick == '' || rank == ''){
        alert('Digite seu nick e o rank')
        return;
    }

    usuario.Lol.nick = nick;
    usuario.Lol.rank = rank;
    localStorage.setItem(usuario.User, JSON.stringify(usuario))
    sessionStorage.setItem('webcache', JSON.stringify(usuario))
    location.reload()

}

function csgoSalvar(){
    const usuario = JSON.parse(sessionStorage.getItem('webcache'));

    var nick = document.querySelector('.csgonick').value
    var rank = document.querySelector('.csgorank').value

    if (nick == '' || rank == ''){
        alert('Digite seu nick e o rank')
        return;
    }

    usuario.Cs.nick = nick;
    usuario.Cs.rank = rank;
    localStorage.setItem(usuario.User, JSON.stringify(usuario))
    sessionStorage.setItem('webcache', JSON.stringify(usuario))
    location.reload()
    
}


function dialogSair(){
    const modalval = document.querySelector('.dialogval')
    const modallol = document.querySelector('.dialoglol')
    const modalcsgo = document.querySelector('.dialogcsgo')
    const infoval = document.querySelector('.alterarinfoval')
    const infolol = document.querySelector('.alterarinfolol')
    const infocsgo = document.querySelector('.alterarinfocsgo')
    modalval.close()
    modallol.close()
    modalcsgo.close()
    infoval.close()
    infolol.close()
    infocsgo.close()
}

function deletar(){
    const usuario = JSON.parse(sessionStorage.getItem('webcache'));
    var senhaAntiga = document.querySelector('.SenhaAntiga').value

    if ( senhaAntiga == ''){
        alert('Digite sua senha para excluir a conta')
        return;
    }

    if (senhaAntiga != usuario.Senha){
        alert('Senha incorreta')
        return;
    }

    sessionStorage.removeItem('webcache');
    localStorage.removeItem(usuario1.User)
    location.href = '/mainPage/mainPage.html';

}

function jogoscad(){
    let val = document.querySelector('.setupJogos');
    const usuario1 = JSON.parse(sessionStorage.getItem('webcache'));
    
    if(usuario1.Valorant.nick != ''){
        val.innerHTML += '<img src="/postLogin/images/valorantlogo.png" class="imgValorant2" alt="valorant" onclick="infoval()">'
        
    }

    if(usuario1.Lol.nick != ''){
        val.innerHTML += '<img src="/postLogin/images/lollogo.png" class="imgLol2" alt="lol" onclick="infolol()">'
        
    }

    if(usuario1.Cs.nick != ''){
        val.innerHTML += '<img src="/postLogin/images/csgologo.png" class="imgCsgo2" alt="csgo" onclick="infocsgo()">'
        
    }

}

jogoscad();
