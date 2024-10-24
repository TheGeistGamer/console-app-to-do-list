import colors from 'colors'
import * as readline from 'node:readline'

export const mostrarMenu = () => {
  return new Promise ( (resolve) => {
    console.clear()
    console.log('========================='.green)
    console.log('  Seleccione una opción'.green)
    console.log('========================='.green)
  
    console.log(`${'1.'.cyan} Crear una tarea`);
    console.log(`${'2.'.cyan} Listar tareas`);
    console.log(`${'3.'.cyan} Listar tareas completadas`);
    console.log(`${'4.'.cyan} Listar tareas pendientes`);
    console.log(`${'5.'.cyan} Completar tarea(s)`);
    console.log(`${'6.'.cyan} Borrar tarea`);
    console.log(`${'0.'.cyan} Salir \n`);
  
    const readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
    readLine.question('Seleccione una opción: ', (opt) => {
      readLine.close()
      resolve(opt)
    })
  })
}

export const pause = () => {

  return new Promise (resolve => {
    const readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
    readLine.question(` \n Presione ${'Enter'.red} para continuar \n`, () => {
      readLine.close()
      resolve()
    })
  })
}