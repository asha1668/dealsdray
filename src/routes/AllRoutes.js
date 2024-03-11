import { Routes, Route } from "react-router-dom";
import { Home, Name, Employelistpage, Loginpage,  Editpage, Dashbord} from "../pages";

export const AllRoutes = ({tasks, setTasks,storedData, setStoredData, formData, setFormData}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home storedData = {storedData}
          setStoredData = {setStoredData}
          formData ={formData}
          setFormData = {setFormData}
          tasks={tasks}
          setTasks ={setTasks}
          />}   />

        <Route path="/name" element={<Name />} />
        <Route path="/employelistpage" element={<Employelistpage storedData = {storedData}
        setStoredData = {setStoredData}
        formData ={formData}
        setFormData = {setFormData}
        tasks={tasks}
        setTasks ={setTasks} />} />
        
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/Editpage/id" element={<Editpage setStoredData = {setStoredData}
        formData ={formData}
        setFormData = {setFormData}
        tasks={tasks}
        setTasks ={setTasks} />} />

<Route path="/dashbord" element={<Dashbord storedData = {storedData}
          setStoredData = {setStoredData}
          formData ={formData}
          setFormData = {setFormData}
          tasks={tasks}
          setTasks ={setTasks}
          />} />
        
      </Routes>
    </>
  )
}