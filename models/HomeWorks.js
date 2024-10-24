import Tarea from './tarea.js'

export default class HomeWorks {
  
  constructor() {
    this._listado = {}
  }

  get listadoArr () {
    const listado = []

    Object.keys(this._listado).forEach( key => {
      const tarea = this._listado[key]
      listado.push(tarea)
    })

    return listado
  }

  cargarTareasFromArray (tareas = []) {
    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea
    })
  }

  crearTarea (desc = '') {
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }

  listadoCompleto (ext = null) {
    const data = ext || this.listadoArr

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element == undefined) return

      const {completadoEn, desc} = element

      const indice = `${i + 1}`.cyan
      const descrip = `${desc}`

      const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red

      console.log(`${indice}.${descrip} :: ${estado} `)
    }
  }

  completedList (complete = true) {
    const state = this.listadoArr
    const newArr = state.filter((item) => item.completadoEn !== null)
    this.listadoCompleto(newArr)
  }

  pendingList (complete) {
    const newArr = this.listadoArr.filter((item) => (item.completadoEn === complete))
    this.listadoCompleto(newArr)
  }

  borrarTarea(id ='') {
    if (this._listado[id]) {
      delete this._listado[id]
    }
  }

  toggleCompletadas(ids = []) {
    ids.forEach(id => {
      const tarea = this._listado[id]
      if (!tarea.completadoEn) {
        tarea.completadoEn = ('Completada'.green)
      }
    })

    this.listadoArr.forEach(tarea => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null
        
      }
    })
  }

}