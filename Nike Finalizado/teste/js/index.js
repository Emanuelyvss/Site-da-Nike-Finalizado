function validacao() {

    let login = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;


    if (login == "emanuely" && senha == "emanuely123") {
        alert("Sucesso")
        location.href = "../pg.home/home.html"
    } else {
        alert("Usuário ou senha incorretos!")
    }

}


