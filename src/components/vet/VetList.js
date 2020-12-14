import React, { useEffect } from "react"
import {VetContext} from "./VetProvider"

export const VetList = () => {
    const [vet, getVet] = useContext(VetContext)

    useEffect(() => {
    getVet();
  }, []);

  return (
      
  )
}
