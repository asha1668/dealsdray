import { Navbar } from "./Navbar";

export const EditEmploye = ({tasks, setTasks, storedData, setStoredData, formData, setFormData}) => {
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: type === 'checkbox' ? 
            checked ? [...prevData.courses, value] : prevData.courses.filter(course => course !== value)
            : value,
        }));
      };
    
      
      const handleFileChange = (e) => {
        setFormData(prevData => ({
          ...prevData,
          image: e.target.files[0],
        }));
      };
    
      
      const handleSubmit = (e) => {
        e.preventDefault();

          if(tasks.id){
            const date = new Date();
            const editedData = storedData.map((employee) =>(
                employee.id === tasks.id ?{id:tasks.id, name:tasks.name, email:tasks.email, designation: tasks.designation, courses:tasks.courses, gender:tasks.gender, date:`${date.toLocaleDateString()}`, images:tasks.image }: employee
            ))
            setStoredData(editedData);
            setTasks({});
          }else{
            const date = new Date();
        
            setFormData({
              id:'',
              name: '',
              email: '',
              mobileNo: '',
              designation: '',
              gender: '',
              courses: [],
              image: '',
              date:`${date.toLocaleDateString}`
            });
        
        
            setStoredData([...storedData,tasks]);
          }
            
        }
  return (
    <div>
      <Navbar/>
      <div className="createemployee">
        <p>create employee</p>

        <form onSubmit={handleSubmit}>
        <div>
        <label>Id:</label>
        <input type="text" name="id" value={tasks.id || ""} onChange={e => setTasks({...tasks, id: e.target.value})} required />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={tasks.name ||""} onChange={e => setTasks({...tasks, name: e.target.value})} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={tasks.email || ""} onChange={e => setTasks({...tasks, email: e.target.value})} required />
      </div>
      <div>
        <label>Mobile No:</label>
        <input type="tel" name="mobileNo" value={tasks.mobileNo || ""} onChange={e => setTasks({...tasks, mobileNo: e.target.value})} pattern="[0-9]{10}" required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={tasks.date || ""} onChange={e => setTasks({...tasks, date: e.target.value})} required />
      </div>
      <div>
        <label>Designation:</label>
        <select name="designation" value={tasks.designation ||""} onChange={e => setTasks({...tasks, designation: e.target.value})} required>
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <label><input type="radio" name="gender" value="M" checked={tasks.gender === 'M'} onChange={e => setTasks({...tasks, gender: e.target.value})} /> Male</label>
        <label><input type="radio" name="gender" value="F" checked={tasks.gender === 'F'} onChange={e => setTasks({...tasks, gender: e.target.value})} /> Female</label>
      </div>
       <div>
        <label>Courses:</label>
        <label><input type="checkbox" name="courses" value="MCA" checked={tasks.courses.includes('MCA')} onChange={e => setTasks({...tasks, courses: e.target.value})} /> MCA</label>
        <label><input type="checkbox" name="courses" value="BCA" checked={tasks.courses.includes('BCA')} onChange={e => setTasks({...tasks, courses: e.target.value})} /> BCA</label>
        <label><input type="checkbox" name="courses" value="BSC" checked={tasks.courses.includes('BSC')} onChange={e => setTasks({...tasks, courses: e.target.value})} /> BSC</label>
      </div>
      <div>
        <label>Image Upload:</label>
        <input type="file" name="image" onChange={e => setTasks({...tasks,image : e.target.value})} />
      </div>
      <button type="submit"> <button type="submit">{ tasks.id ? "Update" : "Add" }</button></button>
    </form>


        
      </div>
    </div>
  )
}


