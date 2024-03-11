import { EditEmploye } from "../components/EditEmploye";

export const Editpage = ({tasks, setTasks, storedData, setStoredData, formData, setFormData}) => {
  return (
    <div>
      <EditEmploye setStoredData = {setStoredData}
        formData ={formData}
        setFormData = {setFormData}
        tasks={tasks}
        setTasks ={setTasks} />
    </div>
  )
}

