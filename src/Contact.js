import react,{useState} from 'react';
function Contact(props){
  const[val, setValue]=useState("Yana");
 const test = (e)=>{
     console.warn("tets",e.target.value);
     setValue(e.target.value);
 }   
 // onClick={()=>{console.warn("Hello")}}
    //let data = "Text";
    return(
        <div>
            <h1>Contact Us</h1>
            <input type="text" onChange={test}></input>
            <button onClick={()=>alert(val)}>
                Click ME
            </button>
        </div>
    )
}
export default Contact;