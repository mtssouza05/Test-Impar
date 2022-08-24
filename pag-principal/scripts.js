function pesquisar(){
    var input, menu, filtro, menuItens, links;
    input=document.getElementById("pesquisa");
    filtro= input.value.toUpperCase();
    menu= document.getElementById("menu");
    menuItens= menu.getElementsByTagName("li");
    for(var i=0;i<menuItens.length;i++){
        links=menuItens[i].getElementsByTagName("span")[0];
        if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
            menuItens[i].style.display="";
        }else{
            menuItens[i].style.display="none";
        }

    }

}

function exibeAlert(){
    alert("Essa funcionalidade ainda não foi implementada.")

}

