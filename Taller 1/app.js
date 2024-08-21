function agregarTarea(){
    const taskList = document.getElementById('taskList');
    const newTask = document.getElementById('taskInput').value;

    // La condicion se cumple si es diferente de vacio, null, undefined
    if (newTask)  {
        const li = document.createElement('li');
        li.textContent = newTask; // Asignar valor al elemento li

        // Crear elemento de boton
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Borrar"; // Titulo del boton
        deleteButton.className = "button-delete" // Clase de estilo css que se asocia al boton
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton); // Anidar boton dentro de la etiqueta li
        taskList.appendChild(li); // Agregar nuevo elemento li al ul de tareas
        document.getElementById('taskInput').value = ""; // Limpiar input
    } else {
        alert("Por favor, ingresa el nombre de tarea.");
    }
}
