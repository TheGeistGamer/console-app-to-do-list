import { v4 as uuidv4 } from 'uuid';

export default class Tarea {
  constructor(desc) {
    this.id = uuidv4()
    this.desc = desc
    this.completadoEn = null
  }
}