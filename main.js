const [texto,senha] = document.querySelectorAll('input');
const btn = document.querySelector('button');
const img = document.querySelector(".btn");
const ImgLol = document.querySelector('#imgLol')
function login(){
    if(texto.value && senha.value.length >= 8){
        btn.removeAttribute("disabled")
        img.classList.remove("btn")
       img.classList.add("cor-mudar")
       ImgLol.setAttribute('src','img/league-of-legends.png')
    }else{
        btn.setAttribute("disabled","disabled");
        img.classList.add("btn")
        img.classList.remove("cor-mudar")
    }
}

texto.addEventListener("input",login);
senha.addEventListener("input", login);
