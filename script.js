function cadastrarUsuario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const sexo = document.getElementById('sexo').value;
    const senha = document.getElementById('senha').value;

        if (!nome || !endereco || !cpf || !email || !sexo || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert('Usuário cadastrado com sucesso!');
    window.location.href = "index.html";
}
