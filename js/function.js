function txt1 (){
    
   
    document.getElementById("icontitulo").textContent="HTML";
    document.getElementById("n4").scrollIntoView();
    document.getElementById("resumo").textContent="HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.";
    
}
function txt2 (){
    
    document.getElementById("icontitulo").textContent="CSS";
    document.getElementById("n4").scrollIntoView();
    document.getElementById("resumo").textContent="Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.";
    
}
function txt3 (){
    
    document.getElementById("icontitulo").textContent="JavaScript";
    document.getElementById("n4").scrollIntoView();
    document.getElementById("resumo").textContent="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. ";
    
}
function txt4 (){
    
    document.getElementById("icontitulo").textContent="PHP";
    document.getElementById("n4").scrollIntoView();
    document.getElementById("resumo").textContent="PHP é uma linguagem de script de uso geral voltada para o desenvolvimento da web.";
    
}
function txt5 (){
    
    document.getElementById("icontitulo").textContent="C#";
    document.getElementById("n4").scrollIntoView();
    document.getElementById("resumo").textContent="C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. ";
    
}
function txt6 (){
    
    document.getElementById("icontitulo").textContent="C++";
    document.getElementById("n4").scrollIntoView();
    document.getElementById("resumo").textContent="C++ é uma das linguagens mais versáteis que existem, permitindo desenvolver desde tarefas simples como aplicações na linha de comando ou web, até sistemas complexos de tempo real, muito usadas no mercado financeiro.";
    
}
function txt7 (){
    
    document.getElementById("icontitulo").textContent="Phyton";
    document.getElementById("n4").scrollIntoView();
    document.getElementById("resumo").textContent="O Python é uma linguagem de programação de compreensão bastante acessível, com uma sintaxe simples e legibilidade clara, além de ter uma aprendizagem bastante rápida.";
    
    
}
function txt8 (){
    
    document.getElementById("icontitulo").textContent="SQL";
    document.getElementById("n4").scrollIntoView();
    document.getElementById("resumo").textContent="É a linguagem de pesquisa declarativa padrão para banco de dados relacional. Muitas das características originais do SQL foram inspiradas na álgebra relacional.";
    
    
}

   document.onmousemove = function(e){//fazer img mover com o cursor
    x = e.pageX, y = e.pageY;
    limite = 50;
    
    var ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    rotx = y*100/wh;
    rotx = 180*rotx/100;
    rotx = rotx-90;
    rotx *= -1;
    
    roty = x*100/ww;
    roty = 100*roty/100;
    roty = roty-90;
    
    document.getElementById("distorcao").style.transform =  "rotateX("+(rotx*limite/100)+"deg) rotateY("+(roty*limite/100)+"deg) translateZ(0)";
   };

  function ativarMenu (menu, lista){//fazer o menu
    var display = document.getElementById(menu).style.display;
    

    if(display=='none'){
        document.getElementById(menu).style.display = 'block';
        document.getElementById(lista).style.display = 'block';
        document.body.style.overflowY = 'hidden';//faz scrool sumir
        document.getElementById(lista).style.animation="altura 800ms normal";
        document.getElementById('tab1').style.position="absolute";
        document.getElementById('tab2').style.position="absolute";
        document.getElementById('tab3').style.position="absolute";
        document.getElementById('tab1').style.transform="rotate(45deg)";
        document.getElementById('tab2').style.transform="rotate(45deg)";
        document.getElementById('tab3').style.transform="rotate(-45deg)";

    
        
        }else{
        document.getElementById(menu).style.display = 'none';
        document.getElementById(lista).style.display = 'none';
        document.body.style.overflowY = 'visible';
        document.getElementById('tab1').style.position="relative";
        document.getElementById('tab2').style.position="relative";
        document.getElementById('tab3').style.position="relative";
        document.getElementById('tab1').style.transform="none";
        document.getElementById('tab2').style.transform="none";
        document.getElementById('tab3').style.transform="none";
         }
  }
