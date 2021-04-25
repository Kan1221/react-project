import React from "react"
class About extends React.Component{
    constructor(){
        super();
       
         // console.warn("Construcortcall"); This will load befre page locad
    }
    componentDidMount(){
      // console.warn('didmount');
      console.warn('props call',this.props.name);
    }
    componentDidUpdate(){
         // alert("Name isupdated");
        //console.warn('didmount updated');
        console.warn('props udpated',this.props.name);
    }
    render(){
        return(
            <div class="aboutus">
                <h1>Abouts us class Component</h1>
                <h2>{this.props.name}</h2>
                
            </div>
        );
    }
}
export default About;