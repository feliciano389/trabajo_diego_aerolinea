
  const validar = () => {
    event.preventDefault();
    const expresiondeparting = /^\d{4}-\d{2}-\d{2}$/; // Expresión regular para validar fecha en formato yyyy-mm-dd
    const expresionreturning = /^\d{4}-\d{2}-\d{2}$/;
    const errores = [];

    const departing = document.getElementById('fechadeparting').value;
    const retunring = document.getElementById('fechareturning').value;

    // Validar formato de fecha
    if (!expresiondeparting.test(departing)) {
      errores.push('La fecha de partida debe tener el formato yyyy-mm-dd');
    }

    if (!expresionreturning.test(retunring)) {
      errores.push('La fecha de regreso debe tener el formato yyyy-mm-dd');
    }

    // Obtener fecha actual
    const fechaActual = new Date();

    // Comparar fechas
    const fechaDeparting = new Date(departing);
    const fechaReturning = new Date(retunring);

    if (fechaDeparting >= fechaActual) {
      errores.push('La fecha de partida debe ser menor a la fecha actual');
    }

    if (fechaReturning >= fechaActual) {
      errores.push('La fecha de regreso debe ser menor a la fecha actual');
    }

    if (fechaDeparting >= fechaReturning) {
      errores.push('La fecha de partida debe ser mayor a la fecha de regreso');
    }

    // Mostrar errores
    const erroresHTML = errores.map(error => `<li><h1>${error}</h1></li>`).join('');
    document.getElementById('error').innerHTML = erroresHTML;
  };

  document.querySelector('#btnRegistrar').addEventListener('click', validar);

document.querySelector('#btnRegistrar')
.addEventListener('click',() => validar());