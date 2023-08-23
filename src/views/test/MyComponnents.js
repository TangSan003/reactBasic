import React from "react";

class MyComponnents extends React.Component{

    
    
    state = {
        name: "Quang",
        shool: "UTE"
    }

    handleOnChanelName = (event)=>{
        console.log("Value",event.target.value)
        console.log("Taget",event)
        this.setState({
            name: event.target.value 
        })
    }

    
    handleClickButton = () =>{
        alert (" Click me ")
    }


    render(){
        return(
            <>
        
                <div className="first">
                    <input value={this.state.name} type="text"
                    onChange={(event) => this.handleOnChanelName(event)}
                    />
                    <br/>
                    My name is {this.state.name}
                </div>
                <div className="second">
                    My Component to {this.state.shool}
                </div>
                <div className="thirt">
                    <button onClick={()=> this.handleClickButton()}> Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponnents;