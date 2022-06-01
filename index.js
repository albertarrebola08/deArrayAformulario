//Funcion para cambiar formato hora
function convertDateFormat(string) {
    var info = string.split('/');
    return info[0] + '/' + info[1] + '/' + info[2];
}
const dias = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
  ];


function sacaDia(i){
    var dateString = arraySemana[i].fecha;
    const fechaComoCadena = dateString;
    const numeroDia = new Date(fechaComoCadena).getDay();
    const nombreDia = dias[numeroDia -1];
    return nombreDia;
}



// i para las horas, del 0 al 4
function pintaDatos(registro,dia){
    var i = registro;
    console.log(i);
    var nombreDia = sacaDia(i+1)
    var nombreDiaAnterior = nombreDia;
    
    var html = ''
    while((nombreDia==nombreDiaAnterior&&i<arraySemana.length)){
        // if(arraySemana[i].modulo==false){
        //     console.log('FAAAALSSSSSSSSSSSOOOOOOOOOO')
        //     document.querySelector('.contentJueves').classList.add('loco')
        // }
    i++;
    
    document.querySelector(`div[data-fecha='${dia}']`).innerHTML = arraySemana[registro].fecha;
    if(arraySemana[i-1].modulo==false){console.log('falsoooooooooooooooooooooooooooooooooooooooooo');}
    else{
    html +=  `
    
    <div class="h">
        <div class=" casilla modulo">${arraySemana[registro].modulo}</div>
        <div class="casilla uf">${arraySemana[registro].uf}</div>
        <div class="casilla profe">${arraySemana[registro].profesor}</div>
        <div class="casilla aula">${arraySemana[registro].aula}</div>
    </div>`
    }
    
    registro++;

        nombreDiaAnterior = nombreDia
        console.log('hora '+i);
        if(i<(arraySemana.length-1)){
            
            nombreDia = sacaDia(i);
        }
        
        console.log('WHILE '+ registro);
        
    }
    
    return html
}

function pintaAlumnos(){
    htmlAlumnos = ''
    for(let i=0; i<arrayUsuarios.length; i++){
        htmlAlumnos +=  `
    
    <div class="student fs-6">
        <div class="numOrden">${i}</div>
        <div class="studentName">${arrayUsuarios[i].nombre+' '+arrayUsuarios[i].apellidos} </div>
    </div>`
    }
    return htmlAlumnos
}













document.querySelector(".contentLunes").innerHTML = pintaDatos(0,"lunes")
document.querySelector(".contentMartes").innerHTML = pintaDatos(6,"martes")
document.querySelector(".contentMiercoles").innerHTML = pintaDatos(12,"miercoles")
document.querySelector(".contentJueves").innerHTML = pintaDatos(18,"jueves")
document.querySelector(".contentViernes").innerHTML = pintaDatos(24,"viernes")

console.log('Longitud de array es '+ arraySemana.length);

document.querySelector(".listaAlumnos").innerHTML = pintaAlumnos()



// <div class="numOrden"></div>
// <div class="studentName"></div>




 


