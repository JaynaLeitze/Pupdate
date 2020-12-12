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
            
        </form>
    )
}