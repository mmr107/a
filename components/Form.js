import AddUserForm from "./addUserForm"
import UpdateUserForm from "./UpdateUserForm"



export default function Form() {
    const flag = true;
    return <div > { flag ? < AddUserForm / > : < UpdateUserForm / > } <
        /div>
}