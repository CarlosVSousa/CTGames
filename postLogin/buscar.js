const usuario1 = JSON.parse(sessionStorage.getItem('webcache'));


var nome = document.getElementById('user')
    nome.innerHTML = 'Bem vindo, ' + usuario1.User;

function gerenciar(){
    location.href = '/postLogin/gerenciar.html';
    
}

var avatar = document.querySelector('.avatar')

avatar.src = usuario1.Avatar

var jogo = ''

function sair(){
    sessionStorage.removeItem('webcache');
    location.href = '/mainPage/mainPage.html';

}

function buscarval(){
    imgselecionada()
    var imgval = document.getElementById('imgvalbuscar')
    imgval.style.width = '80px'
    
    var select = document.getElementById('rankbuscar')
    select.innerHTML = `<option value="Ferro1">Ferro 1</option>
    <option value="Ferro2">Ferro 2</option>
    <option value="Ferro3">Ferro 3</option>
    <option value="Bronze1">Bronze 1</option>
    <option value="Bronze2">Bronze 2</option>
    <option value="Bronze3">Bronze 3</option>
    <option value="Prata1">Prata 1</option>
    <option value="Prata2">Prata 2</option>
    <option value="Prata3">Prata 3</option>
    <option value="Ouro1">Ouro 1</option>
    <option value="Ouro2">Ouro 2</option>
    <option value="Ouro3">Ouro 3</option>
    <option value="Platina1">Platina 1</option>
    <option value="Platina2">Platina 2</option>
    <option value="Platina3">Platina 3</option>
    <option value="Diamante1">Diamante 1</option>
    <option value="Diamante2">Diamante 2</option>
    <option value="Diamante3">Diamante 3</option>
    <option value="Ascendente1">Ascendente 1</option>
    <option value="Ascendente2">Ascendente 2</option>
    <option value="Ascendente3">Ascendente 3</option>
    <option value="Imortal1">Imortal 1</option>
    <option value="Imortal2">Imortal 2</option>
    <option value="Imortal3">Imortal 3</option>
    <option value="Radiante">Radiante</option>`

    jogo = 'Valorant'
}

function buscarlol() {
    imgselecionada()
    var imglol = document.getElementById('imglolbuscar')
    imglol.style.width = '80px'
    
    var select = document.getElementById('rankbuscar')
    select.innerHTML = `<option value="Ferro1">Ferro 1</option>
    <option value="Ferro2">Ferro 2</option>
    <option value="Ferro3">Ferro 3</option>
    <option value="Bronze1">Bronze 1</option>
    <option value="Bronze2">Bronze 2</option>
    <option value="Bronze3">Bronze 3</option>
    <option value="Prata1">Prata 1</option>
    <option value="Prata2">Prata 2</option>
    <option value="Prata3">Prata 3</option>
    <option value="Ouro1">Ouro 1</option>
    <option value="Ouro2">Ouro 2</option>
    <option value="Ouro3">Ouro 3</option>
    <option value="Platina1">Platina 1</option>
    <option value="Platina2">Platina 2</option>
    <option value="Platina3">Platina 3</option>
    <option value="Diamante1">Diamante 1</option>
    <option value="Diamante2">Diamante 2</option>
    <option value="Diamante3">Diamante 3</option>
    <option value="Mestre">Mestre</option>
    <option value="GraoMestre">Grão-Mestre</option>
    <option value="Desafiante">Desafiante</option>`

    jogo = 'Lol'

}

function buscarcsgo() {
    imgselecionada()
    var imgcsgo = document.getElementById('imgcsgobuscar')
    imgcsgo.style.width = '80px'

    var select = document.getElementById('rankbuscar')
    select.innerHTML = `<option value="Prata1">Prata 1</option>
    <option value="Prata2">Prata 2</option>
    <option value="Prata3">Prata 3</option>
    <option value="Prata4">Prata 4</option>
    <option value="PrataElite">Prata de Elite</option>
    <option value="PrataEliteMestre">Prata de Elite Mestre</option>
    <option value="Ouro1">Ouro 1</option>
    <option value="Ouro2">Ouro 2</option>
    <option value="Ouro3">Ouro 3</option>
    <option value="OuroMestre">Ouro Mestre</option>
    <option value="Ak1">Ak 1</option>
    <option value="Ak2">Ak 2</option>
    <option value="AkCruzada">Ak Cruzada</option>
    <option value="Xerife">Xerife</option>
    <option value="Aguia1">Aguia 1</option>
    <option value="Aguia2">Aguia 2</option>
    <option value="Supremo">Supremo</option>
    <option value="Global">Global</option>`

    jogo = 'Cs'

}

function imgselecionada() {

    var imgval = document.getElementById('imgvalbuscar')
    imgval.style.width = '70px'

    var imglol = document.getElementById('imglolbuscar')
    imglol.style.width = '70px'

    var imgcsgo = document.getElementById('imgcsgobuscar')
    imgcsgo.style.width = '70px'
}

function buscarrank(){
    max = localStorage.length
    lista = document.querySelector('.formListar')

    var select = document.getElementById('rankbuscar');

    lista.innerHTML = ''
    for ( let i = 0; i < max; i++){
        var user = JSON.parse(localStorage.getItem(localStorage.key(i)))
        if( select.value == user.Valorant.rank){
            let li = document.createElement('li')
            li.innerHTML += 'Nick: ' + user.Valorant.nick + ' / ' + ' Rank: ' + user.Valorant.rank
            li.style.fontSize = '40px'
            li.style.textAlign = 'center'
            lista.appendChild(li)
            
        }

        if( select.value == user.Lol.rank){
            let li = document.createElement('li')
            li.innerHTML += 'Nick: ' + user.Lol.nick + ' / ' + ' Rank: ' + user.Lol.rank
            li.style.fontSize = '40px'
            li.style.textAlign = 'center'
            lista.appendChild(li)
            
        }

        if( select.value == user.Cs.rank){
            let li = document.createElement('li')
            li.innerHTML += 'Nick: ' + user.Cs.nick + ' / ' + ' Rank: ' + user.Cs.rank
            li.style.fontSize = '40px'
            li.style.textAlign = 'center'
            lista.appendChild(li)
            
        }
    }
}