import { useReducer } from 'react'
import Success from './success.js'
import Bug from './bug.js'
const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}


export default function UpdateUserForm() {
    const [formData, setFormData] = useReducer(formReducer, {})
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formData).length == 0) return console.log("dont have form data")
        console.log(formData)
    }
    if (Object.keys(formData).length >= 1) return <Bug messege = { "Data Added" } > < /Bug>
    return ( <
        form onSubmit = { handleSubmit } >
        <
        div className = "input-type" >
        <
        input type = "text"
        onChange = { setFormData }
        className = "firstname"
        placeholder = "firstname" / >

        <
        /div>

        <
        div className = "input-type" >
        <
        input type = "text"
        onChange = { setFormData }
        className = "lastname"
        placeholder = "lasstname" / >

        <
        /div>

        <
        div className = "input-type" >
        <
        input type = "text"
        onChange = { setFormData }
        className = "email"
        placeholder = "email" / >

        <
        /div> <
        div className = "input-type" >
        <
        input type = "text"
        onChange = { setFormData }
        className = "salary"
        placeholder = "salary" / >

        <
        /div>

        <
        div className = "input-type" >
        <
        input type = "date"
        onChange = { setFormData }
        className = "date"
        placeholder = "date" / >

        <
        /div>

        <
        div className = "input-type" >
        <
        input type = "text"
        onChange = { setFormData }
        className = "birthday"
        placeholder = "birthday" / >

        <
        /div>

        <
        div className = "input-type" >
        <
        input type = "radio"
        onChange = { setFormData }
        value = "Active"
        id = "radiodefault1"
        className = "status" / >
        <
        lable htmlFor = "radiodefault1" > Active < /lable> <
        /div>

        <
        div className = "input-type" >
        <
        input type = "radio"
        onChange = { setFormData }
        value = "INActive"
        id = "radiodefault2"
        className = "status" / >
        <
        lable htmlFor = "radiodefault2" > InActive < /lable> <
        /div> <
        button > Add < /button> <
        /form>
    )
}