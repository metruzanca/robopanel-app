export default class Logger {
  name: string
  
  constructor(name = "logger"){
    this.name = name
  }

  log(data:any){
    console.log(this.name, data)
    return data
  }

  error(e:any) {
    console.error(this.name, e)
  }
}