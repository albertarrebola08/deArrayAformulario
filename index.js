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
function pintaDatos(registro){
    var i = registro;
    console.log(i);
    var nombreDia = sacaDia(i)
    

    var nombreDiaAnterior = nombreDia;
  
    var html = ''
    while(nombreDia==nombreDiaAnterior){
        
    document.querySelector(`div[data-fecha='${i}']`).innerHTML = arraySemana[registro].fecha;
    console.log('hora ' +i);
    html +=  `
    <div class="h">
        <div class="modulo">${arraySemana[registro].modulo}</div>
        <div class="uf">${arraySemana[registro].uf}</div>
        <div class="profe">${arraySemana[registro].profesor}</div>
        <div class="aula">${arraySemana[registro].aula}</div>
    </div>`
        
        
        registro++;
        i++
        nombreDiaAnterior = nombreDia
        nombreDia = sacaDia(i);
        console.log('WHILE '+ registro);
        
    }
    
    return html
}


document.querySelector(".contentLunes").innerHTML = pintaDatos(0)
document.querySelector(".contentMartes").innerHTML = pintaDatos(5)
document.querySelector(".contentMiercoles").innerHTML = pintaDatos(10)
document.querySelector(".contentJueves").innerHTML = pintaDatos(15)
document.querySelector(".contentViernes").innerHTML = pintaDatos(20)









 


