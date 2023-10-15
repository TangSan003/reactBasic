import React from "react";
import {toast } from 'react-toastify';

class AddTodo extends React.Component{


    state = {
        title:  ""
    }
    

    
    handleChaneltitle = (event)=>{
        this.setState({
            title: event.target.value
        })
    }

    handleChanelSubmit = (event)=>{
        
        if(!this.state.title){
            toast.error('Input Default')
            return;
        }
        this.props.addNewTitle({
            id: Math.floor(Math.random()*100),
            title: this.state.title})
        
        toast.success("Wow so easy!")
        
        this.setState({
            title: ''
        })
    }
    // 
    render(){
        let {title} = this.state
        return(
            <div className="add-todo">
                    <input 
                        className="input" 
                        value={title}
                        onChange={(event) =>this.handleChaneltitle(event)}
                    />
                    <button 
                        type="button" 
                        className="add"
                        onClick={(event)=>this.handleChanelSubmit(event)}
                    >Add</button>
                </div>
        )
    }
}

export default AddTodo;