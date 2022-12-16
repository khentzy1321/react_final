import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const EmploDetails = () => {

     const{empid}=useParams();
     const[emplodata, emplochange] = useState({});

     useEffect(()=>{
          fetch("http://localhost:8000/employee/"+ empid).then((res)=>{
               return res.json();
          }).then((resp)=>{
               emplochange(resp);
          }).then((err)=>{
               console.log(err.message);
          })
     },[])
     return ( 
          <div>
               <div className="container">
                    <div className="card-body mt-3">
                         { emplodata &&
                         <div>
                              <h3>The Name Of the Employee is: { emplodata.first_name }, { emplodata.last_name}</h3>
                              <h4>Contact Details</h4>
                              <hr />
                              <h5>Email: { emplodata.email }</h5>
                              <h5>Contact Number: { emplodata.contact_number }</h5>
                              <Link className="btn btn-danger" to="/emp">Back To List</Link>
                         </div>
                         
                         }
                        
                    </div>
               </div>
          </div>

      );
}
 
export default EmploDetails;