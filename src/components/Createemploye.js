import { Navbar } from "./Navbar";


export const Createemploye = ({tasks, setTasks, storedData, setStoredData, formData, setFormData}) => {


  
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
          date:`${date.toLocaleDateString()}`
        });
    
    
        setStoredData([...storedData,formData]);
      

  };
  

  return (
    <div>
      <Navbar/>
      <div className="createemployee">
        <p>create employee</p>

        <form onSubmit={handleSubmit}>
        <div>
        <label>Id:</label>
        <input type="text" name="id" value={formData.id} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Mobile No:</label>
        <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} pattern="[0-9]{10}" required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
      </div>
      <div>
        <label>Designation:</label>
        <select name="designation" value={formData.designation} onChange={handleInputChange} required>
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <label><input type="radio" name="gender" value="M" checked={formData.gender === 'M'} onChange={handleInputChange} /> Male</label>
        <label><input type="radio" name="gender" value="F" checked={formData.gender === 'F'} onChange={handleInputChange} /> Female</label>
      </div>
       <div>
        <label>Courses:</label>
        <label><input type="checkbox" name="courses" value="MCA" checked={formData.courses.includes('MCA')} onChange={handleInputChange} /> MCA</label>
        <label><input type="checkbox" name="courses" value="BCA" checked={formData.courses.includes('BCA')} onChange={handleInputChange} /> BCA</label>
        <label><input type="checkbox" name="courses" value="BSC" checked={formData.courses.includes('BSC')} onChange={handleInputChange} /> BSC</label>
      </div>
      <div>
        <label>Image Upload:</label>
        <input type="file" name="image" onChange={handleFileChange} />
      </div>
      <button type="submit"> <button type="submit">{ tasks.id ? "Update" : "Add" }</button></button>
    </form>


        
      </div>
    </div>
  )
}


