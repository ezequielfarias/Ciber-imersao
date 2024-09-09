const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulando uma resposta do servidor (substitua por sua lógica real)
    if (username === 'admin' && password === 'admin') {
        // Redireciona para a página desejada (ajuste o caminho)
        window.location.href = 'index.html';
    } else {
        alert('Usuário ou senha inválidos.');
    }
});