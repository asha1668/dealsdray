import { NavLink } from "react-router-dom";
import {Navbar} from "./Navbar";


export const Employeelist = ({tasks, setTasks, storedData, setStoredData, formData, setFormData}) => {
 const handleEdit = (id) =>{
  const selectedList = storedData.find(employee => employee.id === id);
  setTasks(selectedList);
  
  
  
 }
 const handleDelete = (id) =>{
  const remainingemployee= storedData.filter(employee => employee.id !== id)
  setStoredData(remainingemployee);
  <NavLink to="/"  end>Home</NavLink>
 }
 
 
  return (
    <div >
      <Navbar />
      <div className="employelist">
        <p>Employee List</p>
      </div>
      <div className="container">
       
       <div className="count">
        <span>Total count :</span>
        <span className="countlength">{storedData.length}</span>
        <span className="createemploye">create Eployee</span>
       </div>

      <div className="search-container">
        <input type="text" placeholder="Enter Search Keyword" />
        <button  type="submit">Search</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Unique Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Create Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {storedData.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td><img src={employee.image} alt="Employee" /></td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobileNo}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.courses}</td>
              <td>{employee.date}</td>
              <td>
                <button onClick={() => handleEdit(employee.id)}><NavLink to="/editpage/id" className="edit" >Edit</NavLink></button>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    </div>
  )
}

