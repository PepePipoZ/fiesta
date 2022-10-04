class Usuario{
    constructor(){
        this.nombre=[];
        this.pan=[];
        this.num=0;
    }
    nuevoUsuario(n){
        this.nombre[this.num]=n;
        return "Usuario registrado";
    }
    anadirPan(p){
        this.pan[this.num]=p;
        this.num+=1;
    }
    listaUsuarios(){
        for(let i=0;i==this.num;i++){
            console.log(this.nombre[i]);
            console.log(this.pan[i]);
        }
    }
}

class Preguntas{
    constructor(){
        this.pre=[];
        this.r1=[];
        this.r2=[];
        this.r3=[];
        this.r4=[];
    }
    pYr(){
            let j=0;
            this.pre[j]="¿En una fiesta que haces?";
            this.r1[j]="Solo estoy sentado";
            this.r2[j]="Comer";
            this.r3[j]="Bailar";
            this.r4[j]="Tomar";
            j++;
            this.pre[j]="Cuando te reunes con tus amigos ¿Que haces?";
            this.r1[j]="Juego con ellos";
            this.r2[j]="Conversamos sobre el gobierno";
            this.r3[j]="Platicamos de la moda";
            this.r4[j]="Criticamos gente";
            j++;
            this.pre[j]="¿En una fiesta que sueles tomar mas?";
            this.r1[j]="Jugo";
            this.r2[j]="Refresco";
            this.r3[j]="Tequila";
            this.r4[j]="Cerveza";
            j++
            this.pre[j]="¿Que tipo de musica te gusta escuchar en una fiesta?";
            this.r1[j]="Salsa-Cumbia";
            this.r2[j]="Regeton";
            this.r3[j]="Banda";
            this.r4[j]="De todo";
            j++;
            this.pre[j]="¿Que prefieres comer en una fiesta?";
            this.r1[j]="Algo ligero";
            this.r2[j]="Mole y arroz";
            this.r3[j]="Carnitas";
            this.r4[j]="Pizza";
            j++;
            this.pre[j]="¿Con quien prefieres pasar una fiesta?";
            this.r1[j]="Familia";
            this.r2[j]="Amigos";
            this.r3[j]="Novi@";
            this.r4[j]="Solo";
            j++;
            this.pre[j]="¿Que tipo de persona eres en una fiesta?";
            this.r1[j]="Penoso";
            this.r2[j]="Bailador";
            this.r3[j]="Ligador";
            this.r4[j]="Gracioso";
            j++;
            this.pre[j]="¿Cuanto tomas en una fiesta?";
            this.r1[j]="No tomo";
            this.r2[j]="1-3 copas";
            this.r3[j]="3-6 copas";
            this.r4[j]="Hasta desconocerme";
    }
    preg(i){
        return this.pre[i];
    }
    res1(i){
        return this.r1[i];
    }
    res2(i){
        return this.r2[i];
    }
    res3(i){
        return this.r3[i];
    }
    res4(i){
        return this.r4[i];
    }
}
