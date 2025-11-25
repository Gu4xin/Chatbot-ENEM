let email = document.getElementById('email');
let senha = document.getElementById('senha');
let form = document.querySelector('form');
let textform = document.getElementById('textform');
let textemail = document.getElementById('textemail');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    textform.textContent = '';
    textemail.textContent = '';

    if (email.value === '' || senha.value === '') {
        textform.textContent = 'Por favor preencha os campos de email e senha.';
        return;
    }

 
    if (!validadorEmail(email.value)) {
        textemail.textContent = 'Por favor insira um email válido.';
        return;
    }

 
    console.log(email.value);
    console.log(senha.value);

    let emailCorreto = "yrisgabrielle87@gmail.com";
    let senhaCorreta = "yris0412"
    
    if (email.value == emailCorreto && senha.value == senhaCorreta) {
        window.location.href = "home.html";
    }else {
        textform.textContent = "Email e/ou senha incorretos!";
        return;
    }
});

email.addEventListener('keyup', () => {
    if (!validadorEmail(email.value)) {
        textemail.textContent = 'Por favor insira um email válido.';
    } else {
        textemail.textContent = '';
    }
});

function validadorEmail(email) {
    let emailPattern = /^[a-z0-9-]+(\.[a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
    return emailPattern.test(email);
}
