import { Container } from '../types';
import axios from './httpClient'
import LoggerCreator from './logger'

const logger = new LoggerCreator("lib/api")


type getServersResponse = {containers: Container[]}

export function getServers(): Promise<Container[]> {
  return axios.get<getServersResponse>("/servers/list")
    .then(res => res.data.containers)
    .then(logger.log)
    .catch(logger.error)
}

// TODO Change defaults with sensible defaults
export function createServer(port = 3000, image = "metruzanca/node-echo-rest", name = "echo"){
  return axios.post("/servers/install", {
    id: name,
    image,
    env: '["EULA=TRUE", "MEMORY=2G"]',
    port,
  })
    .then(logger.log)
    .catch(logger.error)
}

export function startServer(id: string){
  return axios.get(`/servers/power/start/?id=${id}`)
    .then(logger.log)
    .catch(logger.error)
}

export async function stopServer(){

}