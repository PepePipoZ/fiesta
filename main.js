var ini = document.getElementById('bi');
var preg = document.getElementById('preguntas');
var vi = document.getElementById('res');
var re4 = document.getElementById('A4');
var re3 = document.getElementById('A3');
var re2 = document.getElementById('A2');
var re1 = document.getElementById('A1');
var barra = document.getElementById('b');
var p = document.getElementById('Q');
var imagen = document.getElementById('Ip');
var de = document.getElementById('des');
var pa = document.getElementById('pan');
var numero=0;
var puntaje=0;
var usu= new Usuario();
var pre= new Preguntas();
inicio();
function inicio(){
    let name=prompt("Ingrese su nombre: ");
    console.log(usu.nuevoUsuario(name));
    numero=0;
    puntaje=0;
    document.getElementById("name").textContent=name;
    pre.pYr();
}
ini.addEventListener('click',function(){
    document.getElementById("inicio").style.display="none";
    preg.style.display="block";
    cambiar();
})
function cambiar(){
    if(numero<8){
        p.textContent=pre.preg(numero);
        re1.textContent=pre.res1(numero);
        re2.textContent=pre.res2(numero);
        re3.textContent=pre.res3(numero);
        re4.textContent=pre.res4(numero);
    }else{
        fin();
        fi(puntaje);
    }
}

re1.addEventListener('click',function(){
    numero++;
    puntaje+=1;
    cambiar();
    console.log(puntaje);
})

re2.addEventListener('click',function(){
    numero++;
    cambiar();
    puntaje+=2;
    console.log(puntaje);
})

re3.addEventListener('click',function(){
    numero++;
    puntaje+=3;
    cambiar();
    console.log(puntaje);
})
re4.addEventListener('click',function(){
    numero++;
    puntaje+=4;
    cambiar();
    console.log(puntaje);
})
function fi(p){
    if(p==8){
        imagen.src="img/fc.jpg";
        de.textContent="Vas a misa antes de la fiesta, escuchas puro 'alabare a mi señor' y tomas agua bendita";
        pa.textContent="Fiesta cristiana 🙏";
        usu.anadirPan("Fiesta cristiana 🙏");
    }else if(p>=9 && p<=13){
        imagen.src="img/fi.gif";
        de.textContent="Eres muy hablador, te gusta mucho las caricaturas y ese tipo de entretenimiento, te gustan los nuggets del aurrera y en los mariscos siempre pides la hamburguesa";
        pa.textContent="Fiesta infantil";
        usu.anadirPan("Fiesta infantil");
    }else if(p>=14 && p<=16){
        imagen.src="img/ff.gif";
        de.textContent="Te gusta pasar tiempo con la familia, no bebes mucho y disfrutas hablar con los demás, te gusta comer cosas ricas y no te molesta el convivir con los niños.";
        pa.textContent="Fiestas familiares";
        usu.anadirPan("Fiestas familiares");
    }else if(p>=17 && p<=28){
        imagen.src="img/fd.gif";
        de.textContent="Te gusta caracterizarte y divertirte, te da igual si hay alcohol o comida, solo buscas diversión, te gusta mucho pasarla bien y disfrutar de la fiesta.";
        pa.textContent="Fiestas de disfraces";
        usu.anadirPan("Fiestas de disfraces");
    }else if(p>=29 && p<=32){
        imagen.src="img/fdes.gif";
        de.textContent="Te gusta embriagarte, bailar hasta que duelan los pies y te desconectas si alguien se te queda viendo";
        pa.textContent="Fiesta destructiva";
        usu.anadirPan("Fiesta destructiva");
    }
    usu.listaUsuarios();
}
function fin(){
    document.getElementById("preguntas").style.display="none";
    document.getElementById("final").style.display="block";
}

vi.addEventListener('click',function(){
    document.getElementById("preguntas").style.display="none";
    document.getElementById("inicio").style.display="block";
    document.getElementById("final").style.display="none";
    inicio();
})