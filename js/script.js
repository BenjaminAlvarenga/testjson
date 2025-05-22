//La funcion tiene un parametro "datos" que representa el json
function CrearTabla(datos){
    let tabla = `<table role="grid" class="overflow-auto">
        <thead>
            <th>Carnet</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Sección</th>
        </thead>
        <tbody>
    `
    ;

    //Funcion
    datos.forEach(integrante => {
        tabla += `
        <tr>
            <td>${integrante.carnet}</td>
            <td>${integrante.nombre}</td>
            <td>${integrante.rol}</td>
            <td>${integrante.sec_academica}</td>
            </tr>
        `;  
    });

    tabla += `
            </tbody>
            </table>
        `;

    document.getElementById("tabla").innerHTML += tabla;
}

//Llamamos a la funcion y le enviamos el JSON
CrearTabla(integrantes);