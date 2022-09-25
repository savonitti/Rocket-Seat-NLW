function trocarPagina(){

    let livros=document.getElementById("page1"); 
    
    let filmes=document.getElementById("page2");
    
    let botao=document.getElementById('botaoTroca');

    if (filmes.style.display=='none')
    {
        livros.style.display='none';
        filmes.style.display='block';
        botao.innerHTML='Meus Games'; 
    }

    else 
    {
        livros.style.display='block';
        filmes.style.display='none';
        botao.innerHTML='Meus Filmes'; 
    }
}

