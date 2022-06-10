

let IdCounter=0;
const input = document.querySelector('input[type="text"]')

userInput.addEventListener('submit', (event)=>{
    event.preventDefault(); //DIFERENTE
addTask();
});


let addTask = ()=>{
    IdCounter++;

    const newValue = input.value;

    const newTask  =`
    <div class="task-container" id="${IdCounter}">
    <label>

        <input type="checkbox">
    ${newValue}
    </label>

    <img src="/8703841_can_trash_bin_garbage_delete_icon.png" class="closeBtn">

</div>`

list.innerHTML+=newTask;
input.value =' ';

updateStats();
};

let updateStats= ()=>{
    let element = list.querySelectorAll('div') //detecta los divs
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML= `Tareas pendientes:${element.length} Completadas:${checkbox.length}`;
};

console.log()

list.addEventListener('click', (event)=>{
if(event.srcElement.nodeName=='INPUT'){
    updateStats();
}
else if(event.srcElement.nodeName=='IMG'){
    deleteTask(event.srcElement.parentNode.id);

}

})



let deleteTask = (id)=>{
let taskDelete = document.getElementById(id);
list.removeChild(taskDelete);
updateStats();
}


let mostrarFecha = document.getElementById('fecha');


let fecha = new Date();

let diaSemana=['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let mesAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

mostrarFecha.innerHTML= `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} del ${fecha.getFullYear()}`;



let mostrarReloj =document.getElementById('reloj');
setInterval(() =>{
    let hora = new Date();
    mostrarReloj.innerHTML= hora.toLocaleTimeString()
}, 1000);