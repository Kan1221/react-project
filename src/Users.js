import React,{Fragment, useState,useEffect} from 'react';
import {Table} from 'react-bootstrap'
function Users(){
    //  const [user,SetUser]=useState([
    //      {name:'Anil', age:'26', address:'Indore'},
    //      {name:'kan', age:'26', address:'Rau'},
    //      {name:'sam', age:'27'},
    //      {name:'yana', age:'25'},
    //      {name:'deepika', age:'29'},
    //      {name:'Radhe', age:'26'},
    //  ])
    // With Api Example below
    const [user,setUser]=useState([]);
    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
             
               data.json().then(result=>{
                   console.warn("Result",result);
                   setUser(result.data);
               })
        }); 
    },[])
    return(
         <Fragment>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          user.map((item,index)=>
                            <tr key={index}>
                             <td>{item.id}</td>
                             <td>{item.employee_name}</td>
                             <td>{item.employee_salary}</td>
                             <td>{item.employee_age}</td>

                            </tr>
                          )
                      }
                        
                       
                    </tbody>
                    </Table>
         </Fragment>
    )
}
export default Users