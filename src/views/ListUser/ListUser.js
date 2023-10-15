import React from 'react';
import axios from 'axios';
import './ListUser.scss';
import { withRouter } from '../HOC/withRouter';

class ListUser extends React.Component{
    state = {
        listUser: []
    }


    async componentDidMount(){
        axios.get("https://reqres.in/api/users?page=2")
            .then((res)=>{
                console.log(res)
            })
        let res = await axios.get("https://reqres.in/api/users?page=2")   
        this.setState({
            listUser: res.data.data ? res.data.data:[]
        })
    }
    handleOnClickUser=(id)=>{
        this.props?.route.navigate(`${id}`)
    }
    render(){
        let listUser=this.state.listUser
        return( 
            <div className='list-user-web'>
                <div className="title">
                    Fetch all list users
                </div>
                <div className='list-user-demo'>
                    {listUser&&listUser.length > 0 &&
                        listUser.map((item,index)=>{
                            return(
                                <div className='child' key={item.id} 
                                    onClick={()=>this.handleOnClickUser(item.id)}
                                >  
                                    {index +1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);