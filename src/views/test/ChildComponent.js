import React from "react";

class ChildComponnents extends React.Component{

   
    state = {
        showJob: true
    }
    showHideCick =(event)=>{
        this.setState({showJob: !this.state.showJob})
    }
    showClick = (event) =>{
        event.preventDefault();
        this.setState({showJob: true})

    }
    hideClick = (event)=>{
        event.preventDefault();
        this.setState({showJob: false})
    }
    onClickDelete = (id) =>{
        this.props.deleteJob(id);
    }
    render(){

        let {listjob }= this.props
        let {showJob}=this.state

        return(
            
            <>
            {
            showJob ===true ? 
                <>
                    <div className="job-lists">
                        {
                            listjob.map((item,index ) => {
                                return(
                                    <div key={item.id}>
                                        {item.title} - {item.salary} 
                                        <></> 
                                        <span 
                                            onClick={()=>{this.onClickDelete(item.id)}}
                                        >x</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                        <div className="">
                            <button
                                onClick={(event)=>{
                                    this.showHideCick(event)
                                }}    
                            >Hide</button>
                        </div>
                </>
            :
                <div>
                    <button
                        onClick={(event)=>{
                            this.showHideCick(event)
                        }}
                    >Show</button> 
                </div>
            }
             
            </>
            
        )

        
       
    }
}



export default ChildComponnents;