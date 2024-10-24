import { guardarDB, readDB } from './helpers/guardarArchivo.js';
import { confirmar, inquirerMenu, leerInput, listadoTareasBorrar, listarParaCompletar, pause } from './helpers/inquirer.js';
import HomeWorks from './models/HomeWorks.js';

const main = async () => {
  let opt = ''
  const tareas = new HomeWorks()

  const tareasDB = readDB()

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB)
  }

  do {
    opt = await inquirerMenu()

    switch (opt) {
      case '1':
        // Crear opcion
        const desc = await leerInput('Descripción: ')
        tareas.crearTarea(desc)
      break;

      case '2':
        tareas.listadoCompleto()
      break;

      case '3':
        tareas.completedList()
      break;
      
      case '4':
        tareas.pendingList(null)
      break

      case '5':
        const ids = await listarParaCompletar(tareas.listadoArr)
        tareas.toggleCompletadas(ids)
      break

      case '6':
        const id = await listadoTareasBorrar(tareas.listadoArr)

        if (id !== '0') {
          const ok = await confirmar('¿Ésta seguro?')
          if (ok) {
            tareas.borrarTarea(id)
          }
        }
      break
    }

    // Guardar en local
    guardarDB(tareas.listadoArr)
    
    // Pausar el codigo
    await pause()

  } while (opt !== '0');
}

main ();