import React, { useContext, useState, useEffect} from "react"
import {useForm} from "react-hook-form"
import {PetContext} from "./PetProvider"

export const PetForm = (props) => {
   const {addPet, pets, getPets} = useContext(PetContext) 
   const {register, handleSubmit, watch, errors} = useForm()

   const 
   


}