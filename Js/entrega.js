var imagem_index = 1;
mostrar_imagem(imagem_index);

function avancar_imagem(n){
    mostrar_imagem(imagem_index += n);
}

function imagem_atual(n){
    mostrar_imagem(imagem_index = n);
}

function mostrar_imagem(n){
    let imagens = document.getElementsByClassName("fade");
    let bolinhas = document.getElementsByClassName("bolinha");
    
    if(n > imagens.length){
        imagem_index = 1;
    }
    
    if(n < 1){
        imagem_index = imagens.length;
    }

    for(let i = 0; i < imagens.length; i++){
        imagens[i].style.display = "none";
    }


    for(let j = 0; j < bolinhas.length; j++){
        bolinhas[j].className = bolinhas[j].className.replace(" active", "");
    }

    imagens[imagem_index-1].style.display = "block";
    bolinhas[imagem_index-1].className += " active";
}