import React from "react";

class AddComponent extends React.Component{


    state = {
        title:  "",
        salary:  ""
    }
    

    
    handleChaneltitle = (event)=>{
        this.setState({
            title: event.target.value
        })
    }
    handleChanelSalary = (event)=>{
        this.setState({
            salary: event.target.value
        })
    }
    
    
    handleOnSubmit = (event)=>{    
        event.preventDefault()
        if(!this.state.salary||!this.state.title){
            alert("Input Default")
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random()*100),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: "",
            salary: ""
        })
        const form = document.getElementById('form')
        form.elements[1].focus(); 
    }

    handleEnter = (event)=> {
        if (event.key==="Enter") {
            const form = document.getElementById('form')
            const index = [...form].indexOf(event.target);
            form.elements[index + 1].focus();
            event.preventDefault()
        }
    }

    render(){
        return(
            <>
                <form id= "form" onSubmit={this.handleOnSubmit}>
                    <label htmlFor="fname">Job Title</label>
                    <br/>

                    <input
                        onKeyDown={(event) =>this.handleEnter(event)}
                        placeholder="Job Name"
                        type="text" 
                        value={this.state.title}
                        onChange={(event) => this.handleChaneltitle(event)}
                    />
                    <br/>

                    <label htmlFor="lname">Salary</label>
                    <br/>

                    <input
                        onKeyDown={(event) =>this.handleEnter(event)}
                        placeholder="Salary"
                        type="text" 
                        value={this.state.salary }
                        onChange={(event) => this.handleChanelSalary(event)}
                    />
                    <br/>
                    
                    <button 
                        className="submit" 
                        type="submit"
                        onClick={(event)=> 
                        this.handleOnSubmit(event)}
                    >Submit</button>

                    <br/>
                     
                </form>

            </>
        )
    }
}

export default AddComponent;