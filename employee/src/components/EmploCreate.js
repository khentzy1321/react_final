import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const EmploCreate = () => {
     const[id]=useState("");
     const[first_name, fnamechange]=useState("");
     const[last_name, lnamechange]=useState("");
     const[email, emailchange]=useState("");
     const[contact_number, cont_numchange]=useState("");
     const[active, actchange]=useState(true);
     const[validation, valchange]=useState(false);
     const navigate=useNavigate();

     const handlesubmit=(e)=>{
           e.preventDefault();
           const emplodata={first_name, last_name, email, contact_number, active};
          
          fetch(" http://localhost:8000/employee",{
               method:"POST", 
               headers:{"content-type":"application/json"},
               body:JSON.stringify(emplodata)
          }).then((res)=>{
               alert('Save Successfully')
               navigate('/emp')
          }).catch((err)=>{
               console.log(err.message) 
          })
     }
     return ( 
          <div>
               <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                         <form className="container mt-3" onSubmit={handlesubmit}>
                              <div className="card">
                                   <div className="card-title">
                                        <h2 className='text-center'>Employee Create</h2>
                                   </div>
                                   <div className="card-body">
                                        <div className="col-lg-12">
                                             <div className="form-group">
                                                  <input value={id} disabled="disabled" type="hidden" className="form-control" />
                                             </div>
                                             <div className="form-group">
                                                  <label>First Name</label>
                                                  <input value={first_name} onMouseDown={e=>valchange(true)} onChange={e=>fnamechange(e.target.value)} type="text" className="form-control" required />
                                                  {first_name.length == 0 && validation && <span className='text-danger'>Enter First Name</span> } 
                                             </div>
                                             <div className="form-group">
                                                  <label>Last Name</label>
                                                  <input value={last_name} onMouseDown={e=>valchange(true)} onChange={e=>lnamechange(e.target.value)} type="text" className="form-control"  required/>
                                                  {last_name.length == 0 && validation && <span className='text-danger'>Enter Last Name</span> } 
                                             </div>
                                             <div className="form-group">
                                                  <label>Email</label>
                                                  <input value={email} onMouseDown={e=>valchange(true)} onChange={e=>emailchange(e.target.value)} type="text" className="form-control"  required/>
                                                  {email.length == 0 && validation && <span className='text-danger'>Enter Email Address</span> } 
                                             </div>
                                             <div className="form-group">
                                                  <label>Contact Number</label>
                                                  <input value={contact_number} onMouseDown={e=>valchange(true)} onChange={e=>cont_numchange(e.target.value)} type="number" className="form-control" required />
                                                  {contact_number.length == 0 && validation && <span className='text-danger'> Enter Phone Number</span> } 
                                             </div>
                                             <div className="form-check">
                                                  <input checked={active} onChange={e=>actchange(e.target.checked)} type="checkbox" className="form-check-input" />
                                                  <label className="form-check-label">Is Active</label>
                                             </div>
                                        </div>
                                        <div className="form-group btncreate">
                                                  <button type="submit" className="btn btn-success btn-sm">Save</button>
                                                  <Link to={'/emp'} className="btn btn-danger btn-sm mx-2">Back</Link>
                                             </div>
                                   </div>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
      );
}
 
export default EmploCreate;