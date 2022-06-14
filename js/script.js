const button = document.getElementById('submite')

button.addEventListener('click', (event) => {
    //event.preventDefault()
    
    const email = document.getElementById('email')
    const senha = document.getElementById('password')
    const conf = document.getElementById('passwordconf')
    let termos = document.getElementById('confirmado')
    
    if(email.value == '') {
        swal.fire({
            icon: 'error',
            title: 'Alerta',
            text: 'O campo de Email não foi preenchido'
        });
        email.classList.add("errorInput")
        event.preventDefault()
    }
    
    if(password.value == '') {
        swal.fire({
            icon: 'error',
            title: 'Alerta',
            text: 'O campo de senha não foi preenchido'
        });
        password.classList.add("errorInput")
        event.preventDefault()
    }

    if(conf.value == '') {
        swal.fire({
            icon: 'error',
            title: 'Alerta',
            text: 'Você não confirmou a senha'
        });
        conf.classList.add("errorInput")
        event.preventDefault()
    }

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf(".") - email.value.indexOf("@") == 1) {
        swal.fire({
            icon: 'error',
            title: 'Alerta',
            text: 'Informe um email válido'
        });
        email.classList.add("errorInput")
        event.preventDefault()
    } else {
        email.classList.remove("errorInput")
    }

    if (!isNaN(email.value) == true && email.value.length == 11) {
        email.classList.remove("errorInput")
        event.preventDefault()
    } 

    if (password.value.length < 8) {
        swal.fire({
            icon: 'error',
            title: 'Alerta',
            text: 'A senha precisa ter no mínimo 8 caracteres'
        });
        password.classList.add("errorInput")
        event.preventDefault()
    } else {
        password.classList.remove("errorInput")
    }

    if (password.value != conf.value) {
        swal.fire({
            icon: 'error',
            title: 'Alerta',
            text: 'Você precisa digitar senhas iguais'
        });
        conf.classList.add("errorInput")
        event.preventDefault()
    } else {
        conf.classList.remove("errorInput")
    }

    if(termos.checked) {
        console.log('checado')
    } else {
        swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Você não aceitou os termos de uso'
        });
        termos.classList.add("errorInput")
        event.preventDefault()
    }

    

})

