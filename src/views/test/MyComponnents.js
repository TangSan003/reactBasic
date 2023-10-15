import React from "react";
import AddComponent from "./AddComponent";
import ChildComponnents from "./ChildComponent";
class MyComponnents extends React.Component{

    
    
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
       
        this.setState({
            arrJobs: [...this.state.arrJobs,job]
        })
    }
    deleteJob = (id)=>{
        let currenJob = this.state.arrJobs;
        currenJob = currenJob.filter(item => item.id !== id)
        this.setState({
            arrJobs: currenJob
        })
    }
    render(){
        return(
            <>
                <AddComponent
                    addNewJob = {this.addNewJob}
                />
                
                <ChildComponnents 
                        age={"12"}
                        listjob={this.state.arrJobs}
                        deleteJob={this.deleteJob}
                />
            </>
            
        )
    }
   
}

export default MyComponnents;