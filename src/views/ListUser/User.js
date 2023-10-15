import React from 'react';
import { withRouter } from '../HOC/withRouter';
import axios from 'axios';

class User extends React.Component{
    state = {
        user: {}
    }

    async componentDidMount(){
        if(this.props?.route && this.props?.route.paragram && this.props?.route.paragram.id){
            let id = this.props.route.paragram.id

            let urf = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: urf && urf.data && urf.data.data? urf.data.data:{}
            })
        }
        
    }
    handleOnClickBackButton=(id)=>{
        this.props?.route.navigate(`/user`)
    }
    render(){
        return(
            <>
                <div>My user {this.props.route.paragram.id}</div>
                <div>User Name: {this.state.user.first_name} {this.state.user.last_name}</div>
                <div>User email: {this.state.user.email}</div>
                <div>
                    <img  src={this.state.user.avatar} alt=''/>
                    <br/>
                    <button onClick={this.handleOnClickBackButton}>Back</button>
                </div>
            </>
            
        )
    }
}

export default withRouter(User);