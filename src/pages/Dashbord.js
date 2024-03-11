import { Navbar } from "../components/Navbar"


export const Dashbord = ({tasks, setTasks, storedData, setStoredData, formData, setFormData}) => {
  return (
    <div>
      <Navbar/>
      <div className="dashbord">
        <p>Dashbord</p>
        <span className="hukum">welcome hukumgupta</span>
      </div>
    </div>
  )
}

