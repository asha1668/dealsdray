 import {Employeelist} from "../components/Employeelist";
 
 export const Employelistpage = ({tasks, setTasks, storedData, setStoredData, formData, setFormData}) => {
   return (
     <div>
       <Employeelist storedData = {storedData}
          setStoredData = {setStoredData}
          formData ={formData}
          setFormData = {setFormData}
          tasks={tasks}
        setTasks ={setTasks}
          />
     </div>
   )
 }
 
 
 