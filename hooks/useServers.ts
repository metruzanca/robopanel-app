import { useState } from 'react'
import { createServer, getServers, startServer } from '../lib'
import { Container } from '../types'
import { useConstructor } from './useConstructor'

export default function useServers(){
  const [serverList, setServerList] = useState<Container[]>([])
  useConstructor(async () => {
    setServerList(await getServers())
  })

  async function refresh() {
    setServerList(await getServers())
  }

  async function create(){
    const response = await createServer()
    console.log(response);
    // TODO do stuff with response
    setServerList(await getServers()) // TODO change how this list is updated
  }

  async function start() {
    const response = await startServer("echo")

  }

  return {
    servers: serverList,
    createServer: create,
    start,
    refresh,
  }
}
