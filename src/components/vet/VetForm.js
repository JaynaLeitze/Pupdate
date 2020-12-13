import React, {useContext} from "react"
import {useForm} from useForm
import VetContext from "./VetProvider"

export const VetForm = () => {
    const {addVet} = useContext(VetContext)
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        data.vetId = parseInt
        addVet(data)
    }
    return (
        <form className="vetForm" onSubmit={handleSubmit(onSubmit)}>
            <h3>Veterinarian</h3>
            <label>Vet Name:</label>
            <input type="text" name="vetName" ref={register} />
            <label>Vet Address:</label>
            <input type="text" name="addressLine1" ref={register}/>
            <input type="text" name="addressLine2" ref={register}/>
            <input type="text" name="city" ref={register}/>
            <input type="text" name="state" ref={register}/>
            <input type="text" name="zip" ref={register}/>
            <label>Vet Phone Number:</label>
            <input type="text" name="phone" ref={register}/>
            <label>Vet Email:</label>
            <input type="text" name="email" ref={register}/>
            <label>Website:</label>
            <input type="text" name="website" ref={register}/>

        </form>
    )
}