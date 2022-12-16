import { useEffect, useState } from "react";
import { AiFillAccountBook, AiFillDelete, AiFillEdit, AiFillEye, AiFillFileAdd } from "react-icons/ai";
import { IoIosAdd, IoIosPersonAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

function Employee()  {
     const[empdata, empdatachange]=useState(null);
     const navigate=useNavigate()

     const LoadDetail=(id)=>{
          navigate("/employee/detail/"+id)
     }
     const RemoveFunction=(id)=>{
          if(window.confirm('Do you want to delete this employee?')){
               fetch(" http://localhost:8000/employee/"+id, {
               method:"DELETE"
          }).then((res)=>{
               alert('Deleted Successfully')
               window.location.reload();
          }).catch((err)=>{
               console.log(err.message) 
          })
          }

     }
     const LoadEdit=(id)=>{
          navigate("/employee/edit/"+id)

     }



          useEffect(()=>{
               fetch("http://localhost:8000/employee").then((res)=>{
                    return res.json();
               }).then((resp)=>{
                    empdatachange(resp);
               }).then((err)=>{
                    console.log(err.message);
               })
          },[])
     return ( 
          <div className="container">
                    <div className="header">
                         <h2 className='text-center'>Employee Information</h2>
                    </div>
                         <div className="divbtn">
                              <Link to={"/employee/create"} className="btn btn-success"><IoIosPersonAdd/></Link>
                         </div>
                         <table className="table table-bordered">
                              <thead className="bg-secondary text-white">
                                   <tr>
                                        {/* <th>Id</th> */}
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email Address</th> 
                                        <th>Contact Number</th>
                                        <th>Action</th>
                                   </tr>
                              </thead>
                              <tbody>
                                { empdata &&
                                   empdata.map(item=>(
                                        <tr key={item.id}>
                                             {/* <td>{ item.id }</td> */}
                                             <td>{ item.first_name }</td>
                                             <td>{ item.last_name}</td>
                                             <td>{ item.email }</td>
                                             <td>{ item.contact_number }</td>
                                             <td>
                                                  <div className='form-group'>
                                                  <a onClick={()=>{LoadEdit(item.id)}} className="btn btn-success btn-sm"><AiFillEdit/></a>
                                                  <a onClick={()=>{RemoveFunction(item.id)}} className="btn btn-danger btn-sm mx-2"><AiFillDelete/></a>
                                                  <a onClick={()=>{LoadDetail(item.id)}} className="btn btn-primary btn-sm"><AiFillEye/></a>
                                                  </div>
                                                  
                                             </td>
                                        </tr>
                                   ))
                                }
                              </tbody>
                         </table>
                    </div>
       
      );
}
 
export default Employee;