const usuario1 = JSON.parse(sessionStorage.getItem('webcache'));
const avatarPreview = document.querySelector('#avatar-preview');
const avatarInput = document.querySelector('#avatar-input');

var nome = document.getElementById('user')
    nome.innerHTML = 'Bem vindo, ' + usuario1.User;

var avatar = document.querySelector('.avatar')

avatar.src = usuario1.Avatar

document.getElementsByName('nome')[0].placeholder = usuario1.User
document.getElementsByName('email')[0].placeholder = usuario1.Email

function gerenciar(){
    location.href = '/postLogin/gerenciar.html';
    
}

function sair(){
    sessionStorage.removeItem('webcache');
    location.href = '/mainPage/mainPage.html';

}

function deletar(){
    const usuario = JSON.parse(sessionStorage.getItem('webcache'));
    var senhaAntiga = document.querySelector('.SenhaAntiga').value

    if(senhaAntiga == usuario.Senha){
        sessionStorage.removeItem('webcache');
        localStorage.removeItem(usuario1.User)
        location.href = '/mainPage/mainPage.html';
        return;
    }
    if (senhaAntiga == ''){
        alert('Digite sua senha para excluir a conta')
        return;
    }
    if (senhaAntiga != usuario.Senha){
        alert('Senha incorreta')
        return;
    }
}

avatarInput.addEventListener('change', () => {
    const file = avatarInput.files[0];
    if (file) {
      // Cria um objeto URL para a imagem selecionada e define como plano de fundo da div de pré-visualização
      avatarPreview.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    }
  });

function salvar(){

    const usuario = JSON.parse(sessionStorage.getItem('webcache'));

    var user = document.querySelector('.UserCadastro').value
    var email = document.querySelector('.EmailCadastro').value
    var senhaAntiga = document.querySelector('.SenhaAntiga').value
    var senhaNova = document.querySelector('.SenhaNova').value
    var imgRecebida = document.querySelector('#avatar-input').value
    var fileRecebido = document.querySelector('#avatar-input').files
    
    const newUsuario = usuario;

    if(user == '' && email == '' && senhaAntiga == '' && senhaNova == '' && imgRecebida == '' ) {
        alert('Preencha algum campo para ser alterado')
        return;
    }    

    if(senhaAntiga == ''){
        alert('Digite a senha atual para alterar algum dado')
        return;
    }

    if (senhaAntiga != usuario.Senha){
        alert('Senha incorreta')
        return;
    }

    if(user != '' && usuario.User != user) {
        localStorage.removeItem(usuario.User);
        usuario.User = user;
    }
    if(email != '') usuario.Email = email;

    if(senhaNova != '') usuario.Senha = senhaNova;

    if(fileRecebido.length > 0){

        var carregarImg = fileRecebido[0]
        console.log(carregarImg)

        var lerArquivo = new FileReader()

        lerArquivo.onload = function(arquivoCarregado) {

        var imgBase64 = arquivoCarregado.target.result
        
        avatar.src = imgBase64
        usuario.Avatar = imgBase64
        localStorage.setItem(usuario.User, JSON.stringify(usuario));
        sessionStorage.setItem('webcache', JSON.stringify(newUsuario));
        }

        console.log(fileRecebido)
        lerArquivo.readAsDataURL(carregarImg)
        
    }    

    document.getElementsByName('nome')[0].placeholder = usuario.User
    document.getElementsByName('email')[0].placeholder = usuario.Email
    document.getElementsByName('nome')[0].value = ''
    document.getElementsByName('email')[0].value = ''
    var nome = document.getElementById('user')
    nome.innerHTML = 'Bem vindo, ' + usuario.User;
    localStorage.setItem(usuario.User, JSON.stringify(usuario));
    sessionStorage.setItem('webcache', JSON.stringify(newUsuario));
    
    }