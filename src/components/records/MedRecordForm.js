import React, {useContext} from "react"
import {useForm} from useForm
import {VetContext} from "./VetProvider"
import {RecordContext} from "./MedRecordsProvider"

export const RecordForm = () => {
    const {register, handleSubmit} = useForm()
    const {addRecord } = useContext(RecordContext)
    
    const onSubmit = (data) => {
        addRecord(data)
    }
    
    return (
        <form className="recordForm" onSubmit={handleSubmit(onSubmit)}>
            <h3>Vet Record</h3>
            <label>Date of Visit:</label>
            <input type="date" name="date" ref={register} />
            <label>Visit Reason</label>
            <input type="text" name="reason" ref={register} />
            <label>Treatments:</label>
            <input name="treatment" ref={register} />
            <label>Vaccinations:</label>
            <input name="vaccinations" ref={register} />
        </form>
    )
}