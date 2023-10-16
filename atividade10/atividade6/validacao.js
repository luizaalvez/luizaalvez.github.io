function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var nomeMae = document.getElementById('nomeMae').value;
    var nomePai = document.getElementById('nomePai').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var atividades = document.querySelectorAll('input[name="atividades"]:checked');
    var aceite = document.getElementById('aceite');

    if (!nome || !dataNascimento || !nomeMae || !nomePai || !telefone || !email || atividades.length === 0) {
        alert('Todos os campos são obrigatórios.');
        return false;
    }

    var dataNascimentoObj = new Date(dataNascimento);
    if (isNaN(dataNascimentoObj.getTime())) {
        alert('Data de nascimento inválida.');
        return false;
    }

    if (email.indexOf('@') === -1 || email.lastIndexOf('.') === -1) {
        alert('Email inválido.');
        return false;
    }

    var dddsValidos = ['11', '12', '13', '14', '15', '16', '17', '18', '19'];
    var ddd = telefone.substring(0, 2);
    if (dddsValidos.indexOf(ddd) === -1) {
        alert('DDD de telefone inválido.');
        return false;
    }

    if (atividades.length > 3) {
        alert('Máximo de 3 atividades extracurriculares permitidas.');
        return false;
    }

    if (!aceite.checked) {
        alert('Você deve aceitar os termos e condições.');
        return false;
    }

    return true;
}
