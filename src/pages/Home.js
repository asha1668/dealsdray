import {Createemploye} from "../components/Createemploye";

export const Home = ({tasks, setTasks, storedData, setStoredData, formData, setFormData}) => {
  return (
    <div>
      <Createemploye storedData = {storedData}
    setStoredData = {setStoredData}
    formData ={formData}
    setFormData = {setFormData}
    tasks={tasks}
        setTasks ={setTasks}
    />
    </div>
  )
}


