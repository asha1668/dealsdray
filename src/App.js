import { AllRoutes } from "./routes/AllRoutes";
import './App.css';
import { useEffect, useState } from "react";



function App() {

  const [storedData, setStoredData] = useState(JSON.parse(localStorage.getItem('employees')) || []);
const date = new Date();
  const [formData, setFormData] = useState({
  id:'',
  name: '',
  email: '',
  mobileNo: '',
  designation: '',
  gender: '',
  courses: [],
  image: '',
  date:`${date.toLocaleDateString()}`});

  const [tasks, setTasks] = useState({});

useEffect(() =>{
localStorage.setItem("employees", JSON.stringify(storedData))
},[storedData])


  return (
    <div className="App">
    <AllRoutes
    storedData = {storedData}
    setStoredData = {setStoredData}
    formData ={formData}
    setFormData = {setFormData}
    tasks={tasks}
    setTasks ={setTasks}
    />
    </div>
  );
}

export default App;
