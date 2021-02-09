import { useRef } from "react";

export function useConstructor(callback: () => void){
  const ref = useRef(false)
  if(!ref.current){
    callback()
    ref.current = true
  }
}