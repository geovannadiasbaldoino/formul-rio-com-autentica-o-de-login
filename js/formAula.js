const usuario = "ana"
const senha = "123"
const u = document.getElementById('usuario')
const p = document.getElementById('senha')

const h3 = document.getElementById('h3')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const usu = u.value.trim()
    const pass = p.value
  
    if((usuario === usu) && (senha === pass)){
        h3.innerText = 'Bem-vindo ao sistema'
        h3.style.color = '#069606'


        // 1. Cria o container principal do carregamento
const loaderContainer = document.createElement('div');
loaderContainer.style.position = 'fixed';
loaderContainer.style.top = '0';
loaderContainer.style.left = '0';
loaderContainer.style.width = '100vw';
loaderContainer.style.height = '100vh';
loaderContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Fundo semi-transparente
loaderContainer.style.display = 'flex';
loaderContainer.style.flexDirection = 'column';
loaderContainer.style.alignItems = 'center';
loaderContainer.style.justifyContent = 'center';
loaderContainer.style.zIndex = '9999'; // Garante que fica por cima de tudo
loaderContainer.style.fontFamily = 'Arial, sans-serif';

// 2. Cria o círculo giratório (Spinner)
const spinner = document.createElement('div');
spinner.style.border = '4px solid #f3f3f3';
spinner.style.borderTop = '4px solid #3498db';
spinner.style.borderRadius = '50%';
spinner.style.width = '40px';
spinner.style.height = '40px';
spinner.style.marginBottom = '15px';

// 3. Cria a animação de rotação via CSS injetado pelo JS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
spinner.style.animation = 'spin 1s linear infinite';

// 4. Cria o texto de aviso
const text = document.createElement('p');
text.innerText = 'Carregando, aguarde...';
text.style.color = '#333';
text.style.fontSize = '18px';

// 5. Monta a estrutura e adiciona na página
loaderContainer.appendChild(spinner);
loaderContainer.appendChild(text);
document.body.appendChild(loaderContainer);


        setTimeout(() => {
            window.location.assign("pag2.html");
        }, 3000);
    } else {
        h3.innerText = "Usuário ou senha incorretos"
        h3.style.color = "#be0000"
    }
})

form.addEventListener('reset', (e) => {
    e.preventDefault()

    h3.innerText = ' '
})